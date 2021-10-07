import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from 'classnames'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon } from '../../images/icons';
import styles from './DateInput.module.css';

const DateInput = ({ label, containerClass, labelClass }) => {
    const [date, setDate] = useState(new Date());
  
    const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
      <button className={styles.input} onClick={onClick} ref={ref}>
        {value}
      </button>
    ));

    return (
      <div className={cn(styles.container, containerClass)} >
        <span className={styles.calendar}><CalendarIcon /></span>
        {label && <div className={cn(styles.label, labelClass)}>{label}</div>}
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          customInput={<CustomInput />}
        />
      </div>
    );
  }
  
  DateInput.propTypes = {
    label: PropTypes.string,
    containerClass: PropTypes.string,
    labelClass: PropTypes.string,
  };
    
  export { DateInput };