import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

import reviews from '../fixtures/reviews';

describe('RestaurantDetail', () => {
  const restaurant = {
    id: 1,
    name: '마법사주방',
    address: '서울시 강남구',
    reviews,
  };

  it('renders name and address and reviews', () => {
    const { container } = render(
      <RestaurantDetail restaurant={restaurant} />,
    );

    expect(container).toHaveTextContent('마법사주방');
    expect(container).toHaveTextContent('서울시');
  });
});
