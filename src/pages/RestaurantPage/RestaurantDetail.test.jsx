import React from 'react';

import { render, screen } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

describe('RestaurantDetail', () => {
  const restaurant = {
    id: 1,
    name: '마법사주방',
    address: '서울시 강남구',
  };

  it('renders name and address', () => {
    render((
      <RestaurantDetail restaurant={restaurant} />
    ));

    expect(screen.getByText('마법사주방')).toBeInTheDocument();
    expect(screen.getByText(/서울시/i)).toBeInTheDocument();
  });
});
