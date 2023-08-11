import {SwitchProps} from "./Switch.props.ts";
import styles from './Switch.module.css';
import cn from "classnames";
import {ForwardedRef, forwardRef} from "react";

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
                className={[styles.input, error ? styles.error : '', className].join(" ")}
                type="checkbox"
                ref={ref}
                {...props}
            />
            <span className={styles.switch}></span>
        </label>
    );
});

Switch.displayName = 'Switch';

export default Switch;