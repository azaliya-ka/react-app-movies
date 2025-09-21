import React from 'react';
import cn from 'classnames';
import styles from './TextArea.module.css';

interface TextAreaTypes {
    placeholder?: string,
    inputClass?: string,
    containerClass?: string,
    label?: string,
    value: string
}
  
const TextArea = ({ placeholder, inputClass, label, containerClass, value } : TextAreaTypes) => {
  return (
    <div className={containerClass}>
      {label && <div className={styles.label}>{label}</div>}
      <textarea
        className={cn(inputClass, styles.input)}
        placeholder={placeholder}
        defaultValue={value}
    />
    </div>
  );
}
  
export { TextArea };