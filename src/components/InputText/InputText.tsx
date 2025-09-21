import React from 'react';
import cn from 'classnames';
import styles from './InputText.module.css';

interface InputTextTypes {
    value: string,
    placeholder?: string,
    inputClass?: string,
    label?: string,
    containerClass?: string
}
  
const InputText = ({ placeholder, inputClass, label, containerClass, value }: InputTextTypes) => {
  return (
    <div className={containerClass}>
      {label && <div className={styles.label}>{label}</div>}
      <input
        type='text'
        className={cn(inputClass, styles.input)}
        placeholder={placeholder}
        defaultValue={value}
    />
    </div>
  );
}

export { InputText };