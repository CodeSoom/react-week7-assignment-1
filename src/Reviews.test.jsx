import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

test('Reviews', () => {
  const reviews = [
    {
      name: '테스터',
      score: 5,
      description: '훌륭하다 훌륭하다 지구인놈들',
    },
    {
      name: '테스터',
      score: 3,
      description: '맛있네요!',
    },
  ];

  const { container } = render(<Reviews reviews={reviews} />);

  expect(container).toHaveTextContent('리뷰');

  reviews.forEach(({ name, score, description }) => {
    expect(container).toHaveTextContent(name);
    expect(container).toHaveTextContent(score);
    expect(container).toHaveTextContent(description);
  });
});
