import {DetailedHTMLProps, InputHTMLAttributes} from "react";


export interface CheckboxProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
    label?: string;
    error?: boolean; // FieldError (if we will use 'react-hook-form')
}