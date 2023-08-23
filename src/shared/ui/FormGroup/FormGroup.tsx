import { InputHTMLAttributes } from 'react';
import styles from './FormGroup.module.css';
import cn from 'classnames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLDivElement>, 'value' | 'onChange'>;

interface FormGroupProps extends HTMLInputProps {
  className?: string;
  propsDirection?: 'row' | 'vert';
}

export const FormGroup = (props: FormGroupProps) => {
  const { children, propsDirection, ...otherProps } = props;

  return (
    <div
      className={cn(styles.FormGroup, {
        [styles.row]: propsDirection === 'row',
        [styles.vert]: propsDirection === 'vert',
      })}
      {...otherProps}
    >
      {children}
    </div>
  );
};
