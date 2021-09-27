import React from 'react';
import cn from 'classnames'
import styles from './Button.css'
  
const Button = ({ value, buttonClass }) => {
  return (
    <input
        type='button'
        className={cn(buttonClass, styles.button)}
        value={value}
    />
  );
}
  
export { Button };