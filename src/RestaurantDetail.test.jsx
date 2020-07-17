import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

import RESTAURANT from '../fixtures/restaurant';

describe('RestaurantDetail', () => {
  const restaurant = RESTAURANT;

  function renderRestaurantDetail() {
    return render(
      <RestaurantDetail restaurant={restaurant} />,
    );
  }

  it('renders name and address', () => {
    const { container } = renderRestaurantDetail();

    expect(container).toHaveTextContent('마녀주방');
    expect(container).toHaveTextContent('서울시');
  });

  it('renders menu', () => {
    const { container } = renderRestaurantDetail();

    expect(container).toHaveTextContent('떡볶이');
  });
});
