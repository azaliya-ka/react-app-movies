import React from 'react';
import cn from 'classnames'
import styles from './InputText.css'
  
const InputText = ({ placeholder, inputClass }) => {
  return (
    <input
        type='text'
        className={cn(inputClass, styles.input)}
        placeholder={placeholder}
    />
  );
}
  
export { InputText };