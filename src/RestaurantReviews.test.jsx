import React from 'react';

import { render } from '@testing-library/react';

import RestaurantReviews from './RestaurantReviews';

describe('RestaurantReviews', () => {
  const restaurant = {
    id: 1,
    name: '마녀주방',
    address: '서울시 강남구',
    reviews: [
      {
        id: 1,
        restaurantId: 1,
        name: '테스터',
        score: 5,
        description: '훌륭하다 훌륭하다 지구인놈들',
      },
      {
        id: 3,
        restaurantId: 1,
        name: '테스터',
        score: 3,
        description: 'Hi!',
      },
    ],
  };

  it('renders reviews', () => {
    const { container } = render((
      <RestaurantReviews
        restaurant={restaurant}
      />
    ));

    expect(container).toHaveTextContent('리뷰');
    expect(container).toHaveTextContent('작성자');
    expect(container).toHaveTextContent('평점');
    expect(container).toHaveTextContent('리뷰 내용');
  });
});
