import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

jest.mock('react-redux');

describe('RestaurantDetail', () => {
  useSelector.mockImplementation((selector) => selector({
    reviewFields: {
      score: '',
      description: '',
    },
  }));

  it('renders Restaurant detail data', () => {
    const restaurant = {
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
    };

    const { container } = render(
      <RestaurantDetail restaurant={restaurant} />,
    );

    expect(container).toHaveTextContent('마법사주방');
    expect(container).toHaveTextContent('서울시');
  });
});
