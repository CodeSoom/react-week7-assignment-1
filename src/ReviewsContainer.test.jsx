import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ReviewsContainer from './ReviewsContainer';

import restaurantReviews from '../fixtures/restaurantReviews';

test('ReviewsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurantReviews,
  }));

  const { getByText } = render(
    <ReviewsContainer />,
  );

  restaurantReviews.forEach(({ description }) => {
    expect(getByText(description)).not.toBeNull();
  });
});
