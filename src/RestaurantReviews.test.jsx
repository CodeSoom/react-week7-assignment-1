import { render } from '@testing-library/react';

import RestaurantReviews from './RestaurantReviews';

describe('RestaurantReviews', () => {
  const reviews = [
    {
      id: 1, restaurantId: 1, name: '테스터', score: 5, description: '훌륭하다',
    },
  ];

  const renderRestaurantReviews = () => render((
    <RestaurantReviews
      reviews={reviews}
    />
  ));

  it('renders review heading', () => {
    const { container } = renderRestaurantReviews();

    expect(container).toHaveTextContent('리뷰');
  });

  it('renders reviews', () => {
    const { container } = renderRestaurantReviews();

    expect(container).toHaveTextContent('테스터');
    expect(container).toHaveTextContent('5');
    expect(container).toHaveTextContent('훌륭하다');
  });
});
