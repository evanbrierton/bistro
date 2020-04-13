import React, { Component } from 'react';
import Calendar from '../calendar';
import TimeInput from '../timeInput';
import EmailForm from '../emailForm';
import Button from '../button';
import { theme } from '../../utils';
import { Previous, Next } from '../../icons';

import './BookingModal.css';

class BookingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null, time: '17:00', scene: 0, buttonFunction: this.next, buttonText: 'NEXT', name: '', email: '',
    };
  }

  handleDateClick = (date, { disabled }) => (!disabled ? this.setState({ date }) : null);

  handleChange = (field) => ({ target: { value } }) => this.setState({ [field]: value })

  next = () => {
    const { scene } = this.state;
    if (scene === 1) this.setState({ buttonFunction: this.submit, buttonText: 'SUBMIT' });
    if (scene !== 2) this.setState({ scene: scene + 1 });
  }

  previous = () => {
    const { scene } = this.state;
    if (scene !== 0) this.setState({ scene: scene - 1 });
    if (scene === 1) this.setState({ buttonFunction: this.next, buttonText: 'NEXT' });
  }

  submit = () => console.log('SUBMIT');

  render = () => {
    const {
      date, time, scene, buttonFunction, buttonText, name, email,
    } = this.state;
    const components = [
      <Calendar handleDateClick={this.handleDateClick} selectedDate={date} />,
      <TimeInput value={time} onChange={this.handleChange('time')} />,
      <EmailForm onChange={this.handleChange} name={name} email={email} />,
    ];
    return (
      <form className="BookingModal" style={{ color: theme.text.dark }}>
        <span style={{ marginLeft: '90%' }}>
          <Button backgroundColor="rgba(0, 0, 0, 0)" color={theme.text.dark} Icon={Previous} style={{ boxShadow: 'none' }} onClick={this.previous} />
          <Button backgroundColor="rgba(0, 0, 0, 0)" color={theme.text.dark} Icon={Next} style={{ boxShadow: 'none' }} onClick={this.next} />
        </span>
        {components[scene]}
        <div className="button-section">
          <hr style={{ color: theme.text.dark }} />
          <Button onClick={buttonFunction} Icon={Next} style={{ margin: '2rem 40%' }}>
            {buttonText}
          </Button>
        </div>
      </form>
    );
  }
}

export default BookingModal;
