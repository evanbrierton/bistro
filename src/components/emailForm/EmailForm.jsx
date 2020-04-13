import React from 'react';
import { func, string } from 'prop-types';
import { theme } from '../../utils';

import './EmailForm.css';

const EmailForm = ({ onChange, name, email }) => (
  <div className="EmailForm">
    <h4>Just a couple more details!</h4>
    <label htmlFor="name">
      <span style={{ borderBottom: `solid ${theme.active} 4px` }}>Name:</span>
      <input type="text" name="name" id="name" value={name} onChange={onChange('name')} placeholder="John Smith" />
    </label>
    <label htmlFor="name">
      <span style={{ borderBottom: `solid ${theme.active} 4px` }}>Email:</span>
      <input type="email" name="email" id="email" value={email} onChange={onChange('email')} placeholder="johnsmith@ucdconnect.ie" />
    </label>
  </div>
);

EmailForm.propTypes = {
  onChange: func.isRequired, name: string.isRequired, email: string.isRequired,
};

export default EmailForm;
