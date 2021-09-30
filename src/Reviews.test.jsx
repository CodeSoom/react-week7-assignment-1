import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  context('without any reviews', () => {
    it('renders nothing', () => {
      const { container } = render((
        <Reviews />
      ));

      expect(container.innerHTML).toBe('');
    });
  });

  context('with some reviews', () => {
    it('renders reviews', () => {
      const reviews = [
        {
          id: 1, name: 'John', description: 'Good', score: '5',
        },
      ];

      const { container } = render((
        <Reviews />
      ));

      expect(container).toHaveTextContent('John');
      expect(container).toHaveTextContent('Good');
      expect(container).toHaveTextContent('5');

      expect(container.innerHTML).toBe('');
    });
  });
});
