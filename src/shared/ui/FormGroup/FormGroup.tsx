import { InputHTMLAttributes } from 'react';
import styles from './FormGroup.module.css';
import cn from 'classnames';


type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLDivElement>,
  'value' | 'onChange'
>;


interface FormGroupProps extends HTMLInputProps {
  className?: string;
  row?: boolean;
  vert?: boolean;
}


export const FormGroup = (props: FormGroupProps) => {
  const {
    children,
    row,
    vert,
    ...otherProps
  } = props;


  return (
    <div
      className={cn(styles.FormGroup,{
        [styles.row]: row,
        [styles.vert]: vert,
      })}
      {...otherProps}
    >
      {children}
    </div>
  );
};
