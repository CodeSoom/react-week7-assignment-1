import React from 'react';

import { render } from '@testing-library/react';

import RestaurantReview from './RestaurantReview';

import REVIEWS from '../fixtures/reviews';

const { score: SCORE, description: DESCRIPTION } = REVIEWS;

describe('RestaurantReview', () => {
  function renderRestaurantReview() {
    return render(<RestaurantReview score={SCORE} description={DESCRIPTION} />);
  }

  it('renders review form', () => {
    const { queryByLabelText, queryByText } = renderRestaurantReview();

    expect(queryByLabelText('평점').value).toBe(SCORE);
    expect(queryByLabelText('리뷰 내용').value).toBe(DESCRIPTION);
    expect(queryByText('리뷰 남기기')).not.toBeNull();
  });
});
