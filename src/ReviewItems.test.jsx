import React from 'react';

import { render } from '@testing-library/react';

import restaurant from '../fixtures/restaurant';

import ReviewItems from './ReviewItems';

describe('ReviewItems', () => {
  context('with reviews', () => {
    it('renders review items', () => {
      const { reviews } = restaurant;

      const { container } = render(<ReviewItems reviewItems={reviews} />);

      expect(container).toHaveTextContent('테스터');
    });
  });

  context('without reviews', () => {
    it('renders no items message', () => {
      [[], null, undefined].forEach((reviewItem) => {
        const { container } = render(<ReviewItems reviewItems={reviewItem} />);

        expect(container).toHaveTextContent('리뷰가 없어요');
      });
    });
  });
});
