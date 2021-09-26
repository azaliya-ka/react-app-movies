import React from 'react';
import cn from 'classnames'
import './Select.css'
  
const Select = ({ options, selectClass }) => {
  return (
    <select
        className={cn(selectClass, 'select')}
        
    >
    {options.map(value => {
        return <option>{value}</option>
    })}
    </select>
  );
}
  
export { Select };