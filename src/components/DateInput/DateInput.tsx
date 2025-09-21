import React, { useState } from "react";
import cn from 'classnames'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon } from '../../images/icons';
import styles from './DateInput.module.css';

interface DateInputTypes {
    label: string,
    containerClass?: string,
    labelClass?: string,
}

interface CustomInputTypes {
    value?: string | number,
    onClick?: () => void
}

const DateInput = ({ label, containerClass, labelClass }: DateInputTypes) => {
    const [date, setDate] = useState(new Date());
  
    const CustomInput = React.forwardRef<HTMLButtonElement>(({ value, onClick } : CustomInputTypes, ref) => (
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
          onChange={(date: Date | null) => setDate(date)}
          customInput={<CustomInput />}
        />
      </div>
    );
  }

  export { DateInput };