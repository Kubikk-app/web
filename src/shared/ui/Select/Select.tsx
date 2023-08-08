import { CSSProperties, MouseEventHandler, useEffect, useRef, useState } from 'react';
import { OptionType, Option } from './Option';
import classes from './Select.module.css';
import { Arrow } from '../../icons';

type SelectStatus = 'default' | 'invalid' | 'disabled';

interface SelectProps {
  fullWidth?: boolean;
  selected?: OptionType | null;
  options: OptionType[];
  placeholder?: string;
  mode?: 'rows' | 'cells';
  labelMode?: 'outside' | 'inside';
  status?: SelectStatus;
  onChange?: (selected: OptionType['value']) => void;
  onClose?: () => void;
  onOpen?: () => void;
  onClick?: () => void;
  style?: CSSProperties;
  size?: 'small' | 'medium' | 'big' | 'default';
  label?: string;
}

export const Select = (props: SelectProps) => {
  const { mode = 'rows', status = 'default', style = {}, size = 'default', labelMode = 'outside' } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const [selectedEl, setSelectedEl] = useState<OptionType | undefined | null>(props.selected);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        isOpen && props.onClose?.();
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [props.onClose]);

  useEffect(() => {
    if (props.fullWidth) {
      style.width = '100%';
    }
  }, []);

  useEffect(() => {
    const placeholderEl = placeholderRef.current;
    if (!placeholderEl) return;

    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        setIsOpen((prev) => {
          if (status === 'disabled') {
            return false;
          }

          if (!prev) {
            props.onOpen?.();
          } else {
            props.onClose?.();
          }
          return !prev;
        });
      }
    };
    placeholderEl.addEventListener('keydown', handleEnterKeyDown);

    return () => {
      placeholderEl.removeEventListener('keydown', handleEnterKeyDown);
    };
  }, []);

  const handleOptionClick = (value: OptionType['value']) => {
    const selected = props.options.find((el) => el.value === value && value !== selectedEl?.value);

    setIsOpen(false);
    setSelectedEl(selected);
    props.onClose?.();
    props.onChange?.(value);
  };
  const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
    props.onClick?.();

    setIsOpen((prev) => {
      if (status === 'disabled') {
        return false;
      }

      if (!prev) {
        props.onOpen?.();
      } else {
        props.onClose?.();
      }
      return !prev;
    });
  };

  return (
    <div
      style={props.style}
      className={classes.selectWrapper + ' ' + classes[size]}
      ref={rootRef}
      data-is-active={isOpen}
      data-mode={mode}
      data-testid="selectWrapper"
      label-mode={labelMode}
    >
      {selectedEl ? <label className={classes.label}>{props.label}</label> : null}

      <div className={classes.arrow}>
        <Arrow />
      </div>
      <div
        className={classes.placeholder}
        data-status={props.status}
        data-selected={Boolean(props.selected?.value)}
        onClick={handlePlaceHolderClick}
        role="button"
        tabIndex={0}
        ref={placeholderRef}
      >
        {selectedEl?.title || props.placeholder || props.label}
      </div>
      {isOpen && (
        <ul className={classes.select} data-testid="selectDropdown">
          {props.options.map((option) => (
            <Option key={option.value} option={option} onClick={handleOptionClick} />
          ))}
        </ul>
      )}
    </div>
  );
};
