import React from 'react';
import { func, string } from 'prop-types';

import './TimeInput.css';

const TimeInput = ({
  onChange, value, min, max, step,
}) => (
  <div className="TimeInput">
    <h4>What time would you like to arrive?</h4>
    <input type="time" min={min} max={max} step={step} value={value} onChange={onChange} name="time" id="time" />
  </div>
);

TimeInput.propTypes = ({
  onChange: func.isRequired, value: string.isRequired, min: string, max: string, step: string,
});
TimeInput.defaultProps = ({ min: '16:00', max: '21:30', step: '900' });

export default TimeInput;
