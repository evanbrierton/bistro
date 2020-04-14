import React from 'react';
import { Check } from '../../icons';
import { theme } from '../../utils';

import './BookingConfirmation.css';

const BookingConfirmation = () => (
  <div className="BookingConfirmation">
    <h4>We look forward to seeing you.</h4>
    <span><Check color={theme.active} scale={5} /></span>
    <p>You should receive an email confirming your booking in the next couple of minutes.</p>
  </div>
);

export default BookingConfirmation;
