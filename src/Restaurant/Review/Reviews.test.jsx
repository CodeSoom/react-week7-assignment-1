import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

import restaurant from '../../../fixtures/restaurant';

describe('Reviews', () => {
  context('with review items', () => {
    it('renders review items', () => {
      const { reviews } = restaurant;

      const { container } = render(<Reviews reviews={reviews} />);

      expect(container).toHaveTextContent('테스터');
    });
  });

  context('without review item', () => {
    it('renders no items message', () => {
      [[], null, undefined].forEach((item) => {
        const { container } = render(<Reviews reviews={item} />);

        expect(container).toHaveTextContent('리뷰가 없어요');
      });
    });
  });
});
