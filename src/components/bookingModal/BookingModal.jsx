import React, { Component } from 'react';
import Calendar from '../calendar';
import Button from '../button';
import { theme } from '../../utils';
import { Next } from '../../icons';

import './BookingModal.css';

class BookingModal extends Component {
  constructor(props) {
    super(props);
    this.state = { date: null, time: '17:00', scene: 0 };
  }

  handleDateClick = (date, { disabled }) => (!disabled ? this.setState({ date }) : null);

  handleChange = (field) => ({ target: { value } }) => this.setState({ [field]: value })

  next = () => {
    const { scene } = this.state;
    if (scene !== 2) this.setState((state) => ({ scene: state.scene + 1 }));
    console.log(this.state);
  }

  render = () => {
    const { date, time, scene } = this.state;
    return (
      <div className="BookingModal" style={{ color: theme.text.dark }}>
        {
          scene === 0
            ? <Calendar handleDateClick={this.handleDateClick} selectedDate={date} />
            : null
        }
        {
          scene === 1
            ? (
              <>
                <h4>What time would you like to arrive?</h4>
                <input type="time" min="16:00" max="21:30" step="900" value={time} onChange={this.handleChange('time')} name="time" id="time" />
              </>
            )
            : null
        }
        <hr style={{ color: theme.text.dark }} />
        <Button onClick={this.next}>
          <span>
            Next
            <Next />
          </span>
        </Button>
      </div>
    );
  }
}

export default BookingModal;
