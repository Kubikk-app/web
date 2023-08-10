import { FormEventHandler, HTMLAttributes } from 'react';
import styles from './Form.module.css'

type HTMLFormProps = Omit<
  HTMLAttributes<HTMLFormElement>,
  'onSubmit'
>;

interface FormProps extends HTMLFormProps {
  className?: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export const Form = (props: FormProps) => {
  const {
    children,
    onSubmit,
    ...otherProps
  } = props;

  return (
    <form className={styles.Form} onSubmit={onSubmit} {...otherProps}>
      {children}
    </form>
  );
}
