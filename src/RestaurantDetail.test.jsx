import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

import restaurant from '../fixtures/restaurant';

describe('RestaurantDetail', () => {
  it('renders Restaurant info', () => {
    const { container } = render(
      <RestaurantDetail restaurant={restaurant} />,
    );

    expect(container).toHaveTextContent('양천주가');

    expect(container).toHaveTextContent('서울 강남구');

    expect(container).toHaveTextContent('탕수육');
    expect(container).toHaveTextContent('팔보채');
  });
});
