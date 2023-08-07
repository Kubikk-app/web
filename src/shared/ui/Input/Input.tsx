import {InputHTMLAttributes, ChangeEvent} from 'react';
import styles from './Input.module.css';
import cn from 'classnames';


type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void;
  error?: boolean;
}

export const Input = (props: InputProps) => {
  const {
    value,
    onChange,
    type = 'text',
    placeholder='Text',
    error,
    ...otherProps
  } = props;

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };


  return (
    <div className={styles.InputWrapp}>
      <input
        onChange={onChangeHandler}
        placeholder={placeholder}
        value={value}
        className={cn(styles.input, {
          [styles.error]: error
        })}
        type={type}
        {...otherProps}
      />
    </div>
  );
};
