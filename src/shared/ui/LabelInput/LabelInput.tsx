import { InputHTMLAttributes } from 'react';
import styles from './LabelInput.module.css';
import cn from 'classnames';


type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLLabelElement>,
  'htmlFor'
>;

interface LabelInputProps extends HTMLInputProps {
  className?: string;
  htmlFor: string;
  text: string;
}

export const LabelInput = (props: LabelInputProps) => {
  const {
    text,
    htmlFor,
    ...otherProps
  } = props;

  return (
      <label
        className={cn(styles.labelInput)}
        htmlFor={htmlFor}
        {...otherProps}
      >
        {text}
      </label>
  );
};
