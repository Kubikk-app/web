import {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes, useState,
} from "react";
import styles from './SliderRange.module.css'
import cn from "classnames";

export interface SliderRangeProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
    sizeel: 'big' | 'medium' | 'small';

    max: number;
    min: number;
    value: number;
    /*
    * if you want to use this props, pls, use this examples.
    *
    * const [value, setValueNum] = useState(0)
    *
    * <SliderRange sizeel={'small'} min={0} max={100} step={10} value={value} onChange={(e) => setValueNum(Number(e.target.value))}/>
    *
    * */
    onChange: (_e: ChangeEvent<HTMLInputElement>) => void;
    step: number;
}

export const SliderRange = ({className, max, min, value, step, onChange, disabled, sizeel, ...props}: SliderRangeProps) => {
    const [widthColored, setWidthColored] = useState<number>(min)

    function handleColorChange(e: ChangeEvent<HTMLInputElement>) {
            setWidthColored(Math.round((Number(e.target.value) / max) * 100))
    }

    return (
        <div className={styles.sliderRangeWrapper}>
            <input
                type="range"
                className={cn(className, styles.input, {
                    [styles.bigSize]: sizeel === 'big',
                    [styles.midSize]: sizeel === 'medium',
                    [styles.smallSize]: sizeel === 'small'
                })}
                style={disabled ? {background: ''} : {background: `linear-gradient( to right, var(--primary) ${widthColored}%, var(--secondary) ${widthColored}% ${100 - widthColored}%)`}}
                max={max}
                min={min}
                value={value}
                step={step}
                disabled={disabled}
                onChange={(e) => {
                    if (onChange) onChange(e);
                    handleColorChange(e);
                }}
                {...props}
            />
        </div>
    );
};

export default SliderRange;