import React from 'react';

import { render } from '@testing-library/react';

import ReviewItems from './ReviewItems';

describe('ReviewItems', () => {
  context('with review items', () => {
    it('renders review items', () => {
      const reviewItems = [
        {
          id: 1,
          restaurantId: 1,
          name: '테스터',
          score: 5,
          description: '멋',
        },
      ];

      const { container } = render(<ReviewItems reviewItems={reviewItems} />);

      expect(container).toHaveTextContent('멋');
    });
  });

  context('without review item', () => {
    it('renders no review message', () => {
      [[], null, undefined].forEach((reviewtems) => {
        const { container } = render(<ReviewItems reviewtems={reviewtems} />);

        expect(container).toHaveTextContent('리뷰가 없어요');
      });
    });
  });
});
