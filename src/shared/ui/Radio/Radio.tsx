import { ForwardedRef, forwardRef, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styles from './Radio.module.css';
import cn from "classnames";
export interface RadioProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
    label?: string;
    error?: boolean; // FieldError (if we will use 'react-hook-form')
    name?: string;
}


export const Radio = forwardRef(({
                                        className,
                                        error,
                                        label,
                                        ...props
                                    }: RadioProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <label className={cn(styles.radioWrapper, {
            [styles.errorWrapper]: error
        })}>
            <input
                disabled={error}
                className={cn(className, styles.input)}
                type="radio"
                ref={ref}
                {...props}
            />
            <span
                className={cn(styles.radio, {
                    [styles.error]: error
                })}
            >
            </span>

            {label && label}
        </label>
    );
});

Radio.displayName = 'Radio';

export default Radio;
