import React from 'react';
import cn from 'classnames'
import styles from "./Button.module.css";

interface ButtonTypes {
  value: string,
  buttonClass: string,
  onClick: () => void
}
  
const Button = ({ value, buttonClass, onClick }: ButtonTypes) => {
  return (
    <input
        type='button'
        className={cn(buttonClass, styles.button)}
        value={value}
        onClick={onClick}
    />
  );
}
  
export { Button };