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
});
