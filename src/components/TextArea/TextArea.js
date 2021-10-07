import React from 'react';
import cn from 'classnames'
import PropTypes from "prop-types";
import styles from './TextArea.module.css';
  
const TextArea = ({ placeholder, inputClass, label, containerClass, value }) => {
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

TextArea.propTypes = {
  placeholder: PropTypes.string,
  inputClass: PropTypes.string,
  containerClass: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string
};
  
export { TextArea };