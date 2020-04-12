import React from 'react';
import { string } from 'prop-types';

import { Jumbotron, BookingModal } from '../../components';

const Book = ({ colour }) => (
  <Jumbotron heading="Book a Table" colour={colour}>
    <BookingModal />
  </Jumbotron>
);

Book.propTypes = { colour: string };
Book.defaultProps = { colour: '#ffffff' };

export default Book;
