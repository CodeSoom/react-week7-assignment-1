import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  context('with reviews', () => {
    it('renders reviews', () => {
      const reviews = [
        { name: '테스터', score: 3, description: '우와' },
      ];

      const { container } = render(<Reviews reviews={reviews} />);

      expect(container).toHaveTextContent('테스터');
      expect(container).toHaveTextContent('3');
      expect(container).toHaveTextContent('우와');
    });
  });

  context('without reviews', () => {
    it('renders no-reviews message', () => {
      [[], null, undefined].forEach((reviews) => {
        const { container } = render(<Reviews reviews={reviews} />);

        expect(container).toHaveTextContent('첫번째 리뷰를 남겨주세요');
      });
    });
  });
});
