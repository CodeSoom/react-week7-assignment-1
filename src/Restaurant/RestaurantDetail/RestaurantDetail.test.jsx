import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

import restaurant from '../../../fixtures/restaurant';

describe('RestaurantDetail', () => {
  it('renders Restaurant info', () => {
    const { container } = render(
      <RestaurantDetail restaurant={restaurant} />,
    );

    expect(container).toHaveTextContent(restaurant.name);

    expect(container).toHaveTextContent(restaurant.address);

    restaurant.menuItems.forEach((menuItem) => {
      expect(container).toHaveTextContent(menuItem.name);
    });
  });
});
