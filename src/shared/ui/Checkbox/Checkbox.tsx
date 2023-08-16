import { ForwardedRef, forwardRef, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styles from './Checkbox.module.css';
import cn from "classnames";
import { CheckIcon } from "@/shared/icons";

export interface CheckboxProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
    label?: string;
    error?: boolean; // FieldError (if we will use 'react-hook-form')
}

export const Checkbox = forwardRef(({
                                        className,
                                        error,
                                        label,
                                        ...props
                                    }: CheckboxProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <label className={cn(styles.checkboxWrapper, {
            [styles.errorWrapper]: error
        })}>
            <input
                disabled={error}
                className={cn(className, styles.input)}
                type="checkbox"
                ref={ref}
                {...props}
            />
            <span
                className={cn(styles.checkbox, {
                    [styles.error]: error
                })}
            >
                <CheckIcon />
            </span>

            {label && label}
        </label>
    );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
