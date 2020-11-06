import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  it('renders reviews', () => {
    const reviews = [
      {
        id: 1, name: '테스트', score: '5', description: '정말 최고!',
      },
      {
        id: 2, name: '테스트', score: '10', description: '정말 맛집!',
      },
    ];

    const { container } = render(<Reviews reviews={reviews} />);

    reviews.forEach(({ name, score, description }) => {
      expect(container).toHaveTextContent(name);
      expect(container).toHaveTextContent(score);
      expect(container).toHaveTextContent(description);
    });
  });
});
