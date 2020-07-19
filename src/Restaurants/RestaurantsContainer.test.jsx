import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '양천주가' },
    ],
  }));

  const { container } = render(
    <MemoryRouter>
      <RestaurantsContainer />
    </MemoryRouter>,
  );

  expect(container).toHaveTextContent('양천주가');
});
