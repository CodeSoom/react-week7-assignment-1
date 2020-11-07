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

  restaurantReviews.forEach(({ name, score, description }) => {
    expect(getByText(name)).not.toBeNull();
    expect(getByText(score)).not.toBeNull();
    expect(getByText(description)).not.toBeNull();
  });
});
