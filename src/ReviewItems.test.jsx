import React from 'react';

import { render } from '@testing-library/react';

import ReviewItems from './ReviewItems';

describe('ReviewItems', () => {
  it('renders reviews in the latest order', () => {
    const reviews = [
      {
        id: 4,
        name: '테스터',
        score: 5,
        description: '훌륭하다 훌륭하다 지구인놈들',
      },
      {
        id: 5,
        name: '테스터',
        score: 3,
        description: '맛있네요!',
      },
    ];

    const { getAllByRole } = render(<ReviewItems reviews={reviews} />);

    const orderedReviews = getAllByRole('listitem');

    reviews.forEach(({
      name, score, description,
    }, index) => {
      expect(orderedReviews[index]).toHaveTextContent(name);
      expect(orderedReviews[index]).toHaveTextContent(score);
      expect(orderedReviews[index]).toHaveTextContent(description);
    });
  });
});
