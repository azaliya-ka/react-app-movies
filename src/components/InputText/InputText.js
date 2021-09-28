import React from 'react';
import cn from 'classnames'
import PropTypes from "prop-types";
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

InputText.propTypes = {
  placeholder: PropTypes.string,
  inputClass: PropTypes.string
};
  
export { InputText };