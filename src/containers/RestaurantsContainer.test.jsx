import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantsContainer from './RestaurantsContainer';

import RESTAURANTS from '../../fixtures/restaurants';

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: RESTAURANTS,
  }));

  const { container } = render((
    <MemoryRouter initialEntries={['/restaurants']}>
      <RestaurantsContainer />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent(RESTAURANTS[0].name);
});
