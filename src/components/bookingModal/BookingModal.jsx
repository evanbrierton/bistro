import React, { Component } from 'react';
import firebase from '../../firebase';
import Calendar from '../calendar';
import TimeInput from '../timeInput';
import EmailForm from '../emailForm';
import BookingConfirmation from '../bookingConfirmation';
import Button from '../button';
import { theme } from '../../utils';
import { Previous, Next } from '../../icons';

import './BookingModal.css';

class BookingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null, time: '17:00', scene: 0, buttonFunction: this.next, buttonText: 'NEXT', name: '', email: '', error: null,
    };
  }

  // Fix accessibility issues with the calendar component.
  componentDidMount = () => {
    document.querySelector('.DayPicker-Caption').setAttribute('aria-level', 2);
    document.querySelector('.DayPicker-TodayButton').style.color = theme.active;
    Array.from(document.querySelectorAll('abbr')).forEach((item) => {
      // eslint-disable-next-line no-param-reassign
      item.style.color = theme.text.dark;
    });
  }

  // Handle user input for all fields in the form by updating the state to their current value
  handleDateClick = (date, { disabled }) => (!disabled ? this.setState({ date }) : null);

  handleChange = (field) => ({ target: { value } }) => this.setState({ [field]: value })

  // Functions to change the form scene
  next = () => {
    const { scene } = this.state;
    if (scene === 1) this.setState({ buttonFunction: this.submit, buttonText: 'SUBMIT' });
    if (scene !== 2) this.setState({ scene: scene + 1, error: null });
  }

  previous = () => {
    const { scene } = this.state;
    if (scene !== 0) this.setState({ scene: scene - 1, error: null });
    if (scene === 1) this.setState({ buttonFunction: this.next, buttonText: 'NEXT' });
  }

  submit = () => {
    const emailer = firebase.functions().httpsCallable('email');
    const db = firebase.firestore().collection('bookings');
    const {
      date, time, name, email,
    } = this.state;

    this.setState({ error: null });

    // Promise for error checking and data formatting
    const submitter = new Promise((resolve, reject) => {
      if (!date) reject(new Error('You have not selected a date.'));
      else if (!time) reject(new Error('You have not selected a time.'));
      else if (!name) reject(new Error('You have not entered a name.'));
      else if (!email) reject(new Error('You have not entered an email.'));
      else if (!navigator.onLine) reject(new Error('You are not connected to the internet.'));
      else {
        date.setHours(time.slice(0, 2));
        date.setMinutes(time.slice(3, 6));
        resolve({ date: date.getTime(), name, email });
      }
    });

    submitter
      .then((data) => emailer(data)) // Send email to customer
      .then(() => (
        db.add({
          date: date.toLocaleDateString(),
          time,
          name,
          email,
        })
      )) // Add customer info to the database
      .then(() => this.setState({ scene: 3 }))
      .catch((error) => this.setState({ error }));
  };

  render = () => {
    const {
      date, time, scene, buttonFunction, buttonText, name, email, error,
    } = this.state;
    // Different sections of the form
    const components = [
      <Calendar handleDateClick={this.handleDateClick} selectedDate={date} />,
      <TimeInput value={time} onChange={this.handleChange('time')} />,
      <EmailForm onChange={this.handleChange} name={name} email={email} />,
      <BookingConfirmation />,
    ];
    return (
      <form className="BookingModal" style={{ color: theme.text.dark }}>
        { scene !== 3 ? (
          <span style={{ marginLeft: '90%' }}>
            <Button name="previous" backgroundColor="rgba(0, 0, 0, 0)" color={theme.text.dark} Icon={Previous} style={{ boxShadow: 'none' }} onClick={this.previous} />
            <Button name="next" backgroundColor="rgba(0, 0, 0, 0)" color={theme.text.dark} Icon={Next} style={{ boxShadow: 'none' }} onClick={this.next} />
          </span>
        ) : null }
        {components[scene]}
        { error ? <span className="error">{error.message}</span> : null}
        { scene !== 3 ? (
          <div className="button-section">
            <hr style={{ color: theme.text.dark }} />
            <Button onClick={buttonFunction} Icon={Next} fontSize={24} style={{ margin: '2rem 40%' }}>
              {buttonText}
            </Button>
          </div>
        ) : null }
      </form>
    );
  }
}

export default BookingModal;
