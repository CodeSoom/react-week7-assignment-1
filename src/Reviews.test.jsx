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
      ];

      const { container } = render((
        <Reviews reviews={reviews} />
      ));

      expect(container).toHaveTextContent('John');
      expect(container).toHaveTextContent('Good');
      expect(container).toHaveTextContent('5');
    });
  });
});
