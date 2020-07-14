import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import RESTAURANT from '../../fixtures/restaurant';

test('RestaurantContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: RESTAURANT,
  }));

  const { container } = render((
    <RestaurantContainer />
  ));

  expect(container).toHaveTextContent(RESTAURANT.name);
  expect(container).toHaveTextContent(RESTAURANT.address);
  expect(container).toHaveTextContent(RESTAURANT.menuItems[0].name);
});
