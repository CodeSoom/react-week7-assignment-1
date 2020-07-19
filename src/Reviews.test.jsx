import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

import restaurant from '../fixtures/restaurant';

describe('Reviews', () => {
  context('with reviews', () => {
    it('renders menu items', () => {
      const { reviews } = restaurant;

      const { container } = render(<Reviews reviewItems={reviews} />);

      expect(container).toHaveTextContent('테스터');
    });
  });

  context('without menu item', () => {
    it('renders no items message', () => {
      [[], null, undefined].forEach((reviewItem) => {
        const { container } = render(<Reviews reviewItems={reviewItem} />);

        expect(container).toHaveTextContent('리뷰가 없어요');
      });
    });
  });
});
