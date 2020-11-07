import React from 'react';

import { render } from '@testing-library/react';

import ReviewsDetail from './ReviewsDetail';

describe('RevieswDetail', () => {
  const reviews = [
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
  ];

  it('"리뷰" 이름이 보입니다.', () => {
    const { container } = render(
      <ReviewsDetail reviews={reviews} />,
    );

    expect(container).toHaveTextContent('리뷰');
  });

  it('review들이 보입니다.', () => {
    const { container } = render(
      <ReviewsDetail reviews={reviews} />,
    );

    reviews.forEach(({ name, score, description }) => {
      expect(container).toHaveTextContent(`${name}${score}점${description}`);
    });
  });
});
