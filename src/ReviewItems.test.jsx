import React from 'react';

import { render } from '@testing-library/react';

import restaurant from '../fixtures/restaurants';

import ReviewItems from './ReviewItems';

describe('ReviewItems', () => {
  context('with reviews', () => {
    it('renders menu items', () => {
      const { reviewItems } = restaurant;

      const { container } = render(<ReviewItems reviewItems={reviewItems} />);

      expect(container).toHaveTextContent('테스터');
    });
  });

  context('without menu item', () => {
    it('renders no items message', () => {
      [[], null, undefined].forEach((reviewItem) => {
        const { container } = render(<ReviewItems reviewItems={reviewItem} />);

        expect(container).toHaveTextContent('리뷰가 없어요');
      });
    });
  });
});
