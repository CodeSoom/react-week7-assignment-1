import React from 'react';

import { render } from '@testing-library/react';

import ReviewItems from './ReviewItems';

describe('ReviewItems', () => {
  context('with review items', () => {
    it('renders review items', () => {
      const reviews = [
        {
          id: 1,
          restaurantId: 1,
          name: '테스터',
          score: 5,
          description: '훌륭하다 훌륭하다 지구인놈들',
        },
      ];

      const { container } = render(<ReviewItems reviews={reviews} />);

      expect(container).toHaveTextContent('훌륭하다');
    });
  });

  context('without menu item', () => {
    it('renders no items message', () => {
      [[], null, undefined].forEach((reviews) => {
        const { container } = render(<ReviewItems reviews={reviews} />);

        expect(container).toHaveTextContent('등록된 리뷰가 없습니다');
      });
    });
  });
});
