import React from 'react';
import cn from 'classnames'
import PropTypes from "prop-types";
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

Button.propTypes = {
  value: PropTypes.string,
  buttonClass: PropTypes.string
};
  
export { Button };