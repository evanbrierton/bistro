import React from 'react';
import { func, string } from 'prop-types';

import './EmailForm.css';

const EmailForm = ({ onChange, name, email }) => (
  <div className="EmailForm">
    <input type="text" name="name" id="name" value={name} onChange={onChange('name')} placeholder="John Smith" />
    <input type="email" name="email" id="email" value={email} onChange={onChange('email')} placeholder="johnsmith@ucdconnect.ie" />
  </div>
);

EmailForm.propTypes = {
  onChange: func.isRequired, name: string.isRequired, email: string.isRequired,
};

export default EmailForm;
