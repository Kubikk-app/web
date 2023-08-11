import {ForwardedRef, forwardRef} from 'react';
import {CheckboxProps} from "./Checkbox.props.ts";
import styles from './Checkbox.module.css';
import cn from "classnames";
import {CheckIcon} from "@/shared/icons";


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
