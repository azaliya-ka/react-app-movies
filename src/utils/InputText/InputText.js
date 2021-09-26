import React from 'react';
import cn from 'classnames'
import './InputText.css'
  
const InputText = ({ placeholder, inputClass }) => {
  return (
    <input
        type='text'
        className={cn(inputClass, 'input')}
        placeholder={placeholder}
    />
  );
}
  
export { InputText };