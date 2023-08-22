import { InputHTMLAttributes, HTMLInputTypeAttribute } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  id?: string;
  error?: boolean;
  // type?: 'radio' | 'datetimeLocal' | 'password' | 'month' | 'number' | 'file' | 'email';
  type?: HTMLInputTypeAttribute;
}

export const Input = (props: InputProps) => {
  const { value, type, error, id, ...otherProps } = props;

  return (
    <input
      value={value}
      className={cn(styles.Input, {
        [styles.error]: error,
      })}
      id={id}
      type={type}
      {...otherProps}
    />
  );
};
