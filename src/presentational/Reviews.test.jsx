import React from 'react';

import { render } from '@testing-library/react';

import Reviews from 'presentational/Reviews';

describe('Reviews', () => {
  function renderReviews({ reviews = [] }) {
    return render(
      <Reviews reviews={reviews} />,
    );
  }

  context('with reviews', () => {
    const reviews = [
      {
        id: 1, restaurantId: 1, name: 'hyejineee', score: 5, description: '훌륭하다 훌륭하다 지구인놈들',
      },
    ];

    it('render reviews', () => {
      const { container } = renderReviews({ reviews });
      expect(container).toHaveTextContent(reviews[0].name);
      expect(container).toHaveTextContent(reviews[0].description);
    });
  });

  context('without exist reviews', () => {
    it('render notice that there is no reviews', () => {
      const { container } = renderReviews({});
      expect(container).toHaveTextContent('리뷰가 없어요!');
      expect(container).not.toHaveTextContent('테스터');
    });
  });
});
