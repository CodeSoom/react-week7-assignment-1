import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  context('with reviews', () => {
    it('renders reviews', () => {
      const reviews = [
        { id: 1, name: "블로거", score: 8, description: "Gooooooood!" },
      ];

      const { container } = render(<Reviews reviews={reviews} />);

      expect(container).toHaveTextContent('Gooooooood!');
    });
  });

  context('no review', () => {
    it('renders no review message', () => {
      [[], null, undefined].forEach((reviews) => {
        const { container } = render(<Reviews reviews={reviews} />);

        expect(container).toHaveTextContent('리뷰가 없어요');
      });
    });
  });
});
