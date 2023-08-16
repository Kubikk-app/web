import styles from './Switch.module.css';
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

import { DetailedHTMLProps, InputHTMLAttributes } from "react";


export interface SwitchProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
    error?: boolean;
    sizeel: 'big' | 'middle' | 'small';
}

export const Switch = forwardRef(({
                                      className,
                                      sizeel,
                                      error,
                                      ...props
                                  }: SwitchProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <label className={cn(styles.switchWrapper, {
            [styles.bigSize]: sizeel === 'big',
            [styles.midSize]: sizeel === 'middle',
            [styles.smallSize]: sizeel === 'small'
        })}>
            <input
                disabled={error}
                className={cn(className, styles.input, {
                    [styles.error]: error
                })}
                type="checkbox"
                ref={ref}
                {...props}
            />
            <span className={cn(styles.switch)}></span>
        </label>
    );
});

Switch.displayName = 'Switch';

export default Switch;