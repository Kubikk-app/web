import {DetailedHTMLProps, InputHTMLAttributes} from "react";


export interface SwitchProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
    error?: boolean;
    sizeel: 'big' | 'middle' | 'small';
}