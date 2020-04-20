import React from 'react';
import {
  func, oneOfType, arrayOf, node, string, objectOf, number,
} from 'prop-types';
import { theme } from '../../utils';

import './Button.css';

const Button = ({
  onClick, children, style, backgroundColor, color, Icon, fontSize, name,
}) => (
  <button
    className="Button"
    name={name}
    aria-label={name}
    onClick={onClick}
    type="button"
    style={{
      fontSize: `${fontSize}px`, backgroundColor, color, ...style,
    }}
  >
    <span>
      {children}
      <Icon color={color} size={fontSize} />
    </span>
  </button>
);

Button.propTypes = {
  onClick: func.isRequired,
  children: oneOfType([arrayOf(oneOfType([node, string])), node, string]),
  Icon: func,
  style: objectOf(oneOfType([string, number])),
  backgroundColor: string,
  color: string,
  fontSize: number,
  name: string,
};

Button.defaultProps = {
  children: null,
  Icon: () => <></>,
  style: {},
  backgroundColor: theme.active,
  color: theme.text.light,
  fontSize: 24,
  name: '',
};

export default Button;
