import React from 'react';

import { render } from '@testing-library/react';

import ReviewsItems from './ReviewsItems';

test('ReviewsItems', () => {
  const reviews = [
    {
      id: 2,
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

  const { container } = render((
    <ReviewsItems reviews={reviews} />
  ));

  reviews.forEach(({ name, score, description }) => {
    expect(container).toHaveTextContent(name);
    expect(container).toHaveTextContent(score);
    expect(container).toHaveTextContent(description);
  });
});
