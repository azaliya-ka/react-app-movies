import React from 'react';
import cn from 'classnames'
import PropTypes from "prop-types";
import styles from './InputText.module.css'
  
const InputText = ({ placeholder, inputClass, label, containerClass }) => {
  return (
    <div className={containerClass}>
      {label && <div className={styles.label}>{label}</div>}
      <input
        type='text'
        className={cn(inputClass, styles.input)}
        placeholder={placeholder}
    />
    </div>
  );
}

InputText.propTypes = {
  placeholder: PropTypes.string,
  inputClass: PropTypes.string,
  label: PropTypes.string
};
  
export { InputText };