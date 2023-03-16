import {  InputHTMLAttributes } from "react";
import styles from './input.module.scss';

interface InputProps {
    icon?: React.ReactNode;
    placeholder?: string;
    label?: string;
    labelColor?: string;
    maxWidth?: boolean
}

const CustomInput: React.FC<InputProps & InputHTMLAttributes<HTMLInputElement>> =({icon, placeholder, label, labelColor, maxWidth, ...rest})=>{
    return(
        <section className={styles.Section}>
            {label && <label>{label}</label>}
            <div className={styles.Wrapper}>
                {icon && <span>{icon}</span>}
                <input className={maxWidth ? styles.wideInput : styles.Input} placeholder={placeholder} {...rest}/>
            </div>
        </section>
    )
}

export default CustomInput;