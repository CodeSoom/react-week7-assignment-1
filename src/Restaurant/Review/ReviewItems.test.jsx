import React from 'react';

import { render } from '@testing-library/react';

import ReviewItems from './ReviewItems';

import restaurant from '../../../fixtures/restaurant';

describe('ReviewItems', () => {
  context('with review items', () => {
    it('renders review items', () => {
      const { reviews } = restaurant;

      const { container } = render(<ReviewItems reviewItems={reviews} />);

      expect(container).toHaveTextContent('테스터');
    });
  });

  context('without review item', () => {
    it('renders no items message', () => {
      [[], null, undefined].forEach((reviews) => {
        const { container } = render(<ReviewItems reviewItems={reviews} />);

        expect(container).toHaveTextContent('리뷰가 없어요');
      });
    });
  });
});
