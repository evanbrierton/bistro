import React from 'react';
import { func, instanceOf } from 'prop-types';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';
import './Calendar.css';

const Calendar = ({ handleDateClick, selectedDate }) => (
  <div className="Calendar">
    <h4>Choose which date you&apos;d like to eat with us:</h4>
    <DayPicker
      onDayClick={handleDateClick}
      todayButton="Go to Today"
      selectedDays={selectedDate}
      disabledDays={{ before: new Date(), after: new Date(Date.now() + 2 * 2.628e+9) }}
    />
  </div>
);

Calendar.propTypes = { handleDateClick: func.isRequired, selectedDate: instanceOf(Date) };
Calendar.defaultProps = { selectedDate: null };

export default Calendar;
