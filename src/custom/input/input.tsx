import {  InputHTMLAttributes } from "react";
import styles from './input.module.scss';

interface InputProps {
    icon?: React.ReactNode;
    placeholder?: string;
    label?: string;
    labelColor?: string;
}

const CustomInput: React.FC<InputProps & InputHTMLAttributes<HTMLInputElement>> =({icon, placeholder, label, labelColor, ...rest})=>{
    return(
        <section className={styles.Section}>
            {label && <label>{label}</label>}
            <div className={styles.Wrapper}>
                {icon && <span>{icon}</span>}
                <input className={styles.Input} placeholder={placeholder} {...rest}/>
            </div>
        </section>
    )
}

export default CustomInput;