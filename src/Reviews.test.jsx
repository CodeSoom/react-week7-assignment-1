import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  context('without any review', () => {
    it('renders nothing', () => {
      const reviews = [];

      const { container } = render((
        <Reviews reviews={reviews} />
      ));

      expect(container.innerHTML).toBe('');
    });
  });

  context('with some reviews', () => {
    it('renders reviews', () => {
      const reviews = [
        {
          id: 1, name: 'John', score: '5', description: 'Good',
        },
        {
          id: 2, name: 'Sam', score: '1', description: 'Bad',
        },
      ];

      const { container } = render((
        <Reviews reviews={reviews} />
      ));

      reviews.forEach(({ name, score, description }) => {
        expect(container).toHaveTextContent(name);
        expect(container).toHaveTextContent(score);
        expect(container).toHaveTextContent(description);
      });
    });
  });
});
