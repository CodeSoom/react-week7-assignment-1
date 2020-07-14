import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

test('HomePage', () => {
  const { queryByText } = render((
    <MemoryRouter initialEntries={['/']}>
      <HomePage />
    </MemoryRouter>
  ));

  expect(queryByText('About')).not.toBeNull();
  expect(queryByText('Restaurants')).not.toBeNull();
});
