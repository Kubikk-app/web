import { useEffect, useRef } from 'react';
import type { MouseEventHandler } from 'react';
import classes from './styles/Option.module.css';

export type OptionType = {
  title: string;
  value: string;
};

type OptionProps = {
  option: OptionType;
  // eslint-disable-next-line no-unused-vars
  onClick: (value: OptionType['value']) => void;
};
export const Option = (props: OptionProps) => {
  const {
    option: { value, title },
    onClick,
  } = props;
  const optionRef = useRef<HTMLLIElement>(null);

  const handleClick =
    (clickedValue: OptionType['value']): MouseEventHandler<HTMLLIElement> =>
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
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      className={classes.option}
      value={value}
      onKeyDown={() => console.log('ok')}
      onClick={handleClick(value)}
      // tabIndex={0}
      data-testid={`select-option-${value}`}
      ref={optionRef}
    >
      {title}
    </li>
  );
};
