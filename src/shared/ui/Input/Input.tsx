import {InputHTMLAttributes, ChangeEvent} from 'react';
import styles from './Input.module.css'


type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void;

}

export const Input = (props: InputProps) => {
  const {
    value,
    onChange,
    type = 'text',
    placeholder='Text',
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
        className={styles.input}
        type={type}
        {...otherProps}
      />
    </div>
  );
};
