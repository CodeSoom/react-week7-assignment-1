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

    const { container } = render(<ReviewItems reviews={reviews} />);

    // TODO: 순서대로 정렬됐다는 것 테스트.
    reviews.forEach(({
      name, score, description,
    }) => {
      expect(container).toHaveTextContent(name);
      expect(container).toHaveTextContent(score);
      expect(container).toHaveTextContent(description);
    });
  });
});
