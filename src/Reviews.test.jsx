import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  context('with reviews items', () => {
    it('renders reviews items', () => {
      const reviews = [
        {
          id: 1,
          name: '테스터',
          score: 5,
          description: '맛있어요',
        },
      ];

      const { container } = render(<Reviews reviews={reviews} />);

      expect(container).toHaveTextContent('테스터');
      expect(container).toHaveTextContent('5');
      expect(container).toHaveTextContent('맛있어요');
    });
  });

  context('without reviews item', () => {
    it('renders no reviews message', () => {
      [[], null, undefined].forEach((reviews) => {
        const { container } = render(<Reviews reviews={reviews} />);

        expect(container).toHaveTextContent('리뷰가 없어요');
      });
    });
  });
});
