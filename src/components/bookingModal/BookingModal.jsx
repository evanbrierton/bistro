import React, { Component } from 'react';
import Calendar from '../calendar';
import Button from '../button';
import { theme } from '../../utils';
import { Next } from '../../icons';

import './BookingModal.css';

class BookingModal extends Component {
  constructor(props) {
    super(props);
    this.state = { date: null };
  }

  handleDateClick = (date, { disabled }) => (!disabled ? this.setState({ date }) : null);

  render = () => {
    const { date } = this.state;
    return (
      <div className="BookingModal" style={{ color: theme.text.dark }}>
        <Calendar handleDateClick={this.handleDateClick} selectedDate={date} />
        <hr style={{ color: theme.text.dark }} />
        <Button>
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
