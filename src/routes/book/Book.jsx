import React from 'react';

import { Jumbotron, BookingModal } from '../../components';

const Book = () => (
  <main>
    <Jumbotron heading="Book a Table">
      <BookingModal />
    </Jumbotron>
  </main>
);

export default Book;
