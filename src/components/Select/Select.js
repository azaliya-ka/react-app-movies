import React from 'react';
import cn from 'classnames'
import PropTypes from "prop-types";
import styles from './Select.css'
  
const Select = ({ options, selectClass }) => {
  return (
    <div className={styles.container}>
      <select
        className={cn(selectClass, styles.select)}
      >
        {options.map(value => {
            return <option key={value}>{value}</option>
        })}
      </select>
    </div>
  );
}

Select.propTypes = {
  selectClass: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string)
};
  
export { Select };