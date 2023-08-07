import { useEffect, useRef } from 'react';
import type { MouseEventHandler } from 'react';
import classes from './styles/Option.module.css';

export type Option = {
  title: string;
  value: string;
};
type OptionProps = {
  option: Option;
  onClick: (value: Option['value']) => void;
};
const OptionEl = (props: OptionProps) => {
  const {
    option: { value, title },
    onClick,
  } = props;
  const optionRef = useRef<HTMLLIElement>(null);

  const handleClick =
    (clickedValue: Option['value']): MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(clickedValue);
    };

  useEffect(() => {
    const option = optionRef.current;
    if (!option) return;
    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (document.activeElement === option && event.key === 'Enter') {
        onClick(value);
      }
    };

    option.addEventListener('keydown', handleEnterKeyDown);
    return () => {
      option.removeEventListener('keydown', handleEnterKeyDown);
    };
  }, [value, onClick]);

  return (
    <li
      className={classes.option}
      value={value}
      onClick={handleClick(value)}
      tabIndex={0}
      data-testid={`select-option-${value}`}
      ref={optionRef}
    >
      {title}
    </li>
  );
};

export default OptionEl;
