import React from 'react';
import cn from 'classnames'
import './Select.css'
  
const Select = ({ options, selectClass }) => {
  return (
    <div className='container'>
      <select
        className={cn(selectClass, 'select')}
      >
        {options.map(value => {
            return <option key={value}>{value}</option>
        })}
      </select>
    </div>
  );
}
  
export { Select };