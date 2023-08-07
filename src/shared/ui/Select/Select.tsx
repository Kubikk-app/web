import { CSSProperties, MouseEventHandler, useEffect, useRef, useState } from 'react';
import MenuItem, { Option } from './Option';
import classes from './styles/Select.module.css';
import ArrowIcon from '../../icons/ArrowIcon';

type SelectStatus = 'default' | 'invalid' | 'disabled';

interface SelectProps {
  fullWidth?: boolean;
  selected?: Option | null;
  options: Option[];
  placeholder?: string;
  mode?: 'rows' | 'cells';
  labelMode?: 'outside' | 'inside';
  status?: SelectStatus;
  onChange?: (selected: Option['value']) => void;
  onClose?: () => void;
  onOpen?: () => void;
  onClick?: () => void;
  style?: CSSProperties;
  size?: 'small' | 'medium' | 'big' | 'default';
  label?: string;
}

export const Select = (props: SelectProps) => {
  const {
    mode = 'rows',
    options,
    placeholder,
    status = 'default',
    selected,
    onChange,
    onClose,
    onClick,
    onOpen,
    style = {},
    size = 'default',
    labelMode = 'outside',
    label,
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const [selectedEl, setSelectedEl] = useState<Option | undefined | null>(selected);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        isOpen && onClose?.();
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [onClose]);

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
            onOpen?.();
          } else {
            onClose?.();
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

  const handleOptionClick = (value: Option['value']) => {
    const selected = props.options.find((el) => el.value === value && value !== selectedEl?.value);

    setIsOpen(false);
    setSelectedEl(selected);
    onClose?.();
    onChange?.(value);
  };
  const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
    onClick?.();

    setIsOpen((prev) => {
      if (status === 'disabled') {
        return false;
      }

      if (!prev) {
        onOpen?.();
      } else {
        onClose?.();
      }
      return !prev;
    });
  };

  return (
    <div
      style={style}
      className={classes.selectWrapper + ' ' + classes[size]}
      ref={rootRef}
      data-is-active={isOpen}
      data-mode={mode}
      data-testid="selectWrapper"
      label-mode={labelMode}
    >
      {selectedEl ? <label className={classes.label}>{label}</label> : null}

      <div className={classes.arrow}>
        <ArrowIcon />
      </div>
      <div
        className={classes.placeholder}
        data-status={status}
        data-selected={Boolean(selected?.value)}
        onClick={handlePlaceHolderClick}
        role="button"
        tabIndex={0}
        ref={placeholderRef}
      >
        {selectedEl?.title || placeholder || label}
      </div>
      {isOpen && (
        <ul className={classes.select} data-testid="selectDropdown">
          {options.map((option) => (
            <MenuItem key={option.value} option={option} onClick={handleOptionClick} />
          ))}
        </ul>
      )}
    </div>
  );
};
