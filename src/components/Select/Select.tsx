import React from 'react';
import cn from 'classnames';
import { DropdownArrow } from '../../images/icons';
import styles from './Select.module.css';

interface SelectTypes {
    options: string[],
    label?: string,
    selectClass?: string,
    containerClass?: string,
    arrowClass?: string,
    labelClass?: string,
    iconClass?: string,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
  
const Select = ({
  options,
  label,
  selectClass,
  containerClass,
  arrowClass,
  labelClass,
  iconClass,
  onChange
} : SelectTypes) => {
  return (
    <div className={cn(styles.container, containerClass)}>
        {label && <div className={cn(styles.label, labelClass)}>{label}</div>}
        <select
          className={cn(selectClass, styles.select)}
          onChange={onChange}
        >
          {options.map(value => {
              return <option key={value}>{value}</option>
          })}
        </select>
      <span className={cn(styles.arrow, arrowClass)}><DropdownArrow className={iconClass} /></span>
    </div>
  );
}
  
export { Select };