import React from 'react';

import { render } from '@testing-library/react';

import RestaurantReviews from './RestaurantReviews';

import reviews from '../../fixtures/reviews';

jest.mock('react-redux');

describe('RestaurantReviews', () => {
  context('with restaurant review', () => {
    it('renders reviews', () => {
      const { getByText, getAllByText } = render(<RestaurantReviews reviews={reviews} />);

      expect(getAllByText('테스터')).toHaveLength(2);
      expect(getByText('2')).not.toBeNull();
      expect(getByText('5')).not.toBeNull();
      expect(getByText('테스트다')).not.toBeNull();
      expect(getByText('테스트다2')).not.toBeNull();
    });
  });

  context('without restaurant review', () => {
    it('renders no items message', () => {
      const { getByText } = render(<RestaurantReviews reviews={null} />);

      expect(getByText('리뷰가 없습니다.'));
    });
  });
});
