import {  InputHTMLAttributes } from "react";
import styles from './textarea.module.scss';

interface InputProps {
    placeholder?: string;
}

const CustomTextArea: React.FC<InputProps & InputHTMLAttributes<HTMLTextAreaElement>> =({placeholder, ...rest})=>{
    return(
        <textarea className={styles.textArea} placeholder={placeholder} {...rest}/>
    )
}

export default CustomTextArea;