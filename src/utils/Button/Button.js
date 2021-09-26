import React from 'react';
import cn from 'classnames'
import './Button.css'
  
const Button = ({ value, buttonClass }) => {
  return (
    <input
        type='button'
        className={cn(buttonClass, 'button')}
        value={value}
    />
  );
}
  
export { Button };