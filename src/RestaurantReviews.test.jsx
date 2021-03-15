import React from 'react';

import { render } from '@testing-library/react';

import RestaurantReviews from './RestaurantReviews';

describe('RestaurantReviews', () => {
  context('with reviews', () => {
    const reviews = [
      {
        id: 1,
        restaurantId: 1,
        name: '테스터',
        score: 5,
        description: '훌륭하다 훌륭하다 지구인놈들',
      },
    ];

    it('renders reviews', () => {
      const { container } = render((
        <RestaurantReviews
          reviews={reviews}
        />
      ));

      expect(container).toHaveTextContent('리뷰');
      expect(container).toHaveTextContent('작성자');
      expect(container).toHaveTextContent('평점');
      expect(container).toHaveTextContent('리뷰 내용');
    });
  });

  context('without reviews', () => {
    it('renders no reviews message', () => {
      [[], undefined, null].forEach((reviews) => {
        const { container } = render((
          <RestaurantReviews
            reviews={reviews}
          />
        ));

        expect(container).toHaveTextContent('등록된 리뷰가 없습니다.');
      });
    });
  });
});
