import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

import reviews from '../fixtures/reviews';

describe('Reviews', () => {
  function renderReviewList(reviewList) {
    return render(<Reviews reviews={reviewList} />);
  }

  context('without reviews', () => {
    it('renders no reviews message', () => {
      const { container } = renderReviewList();

      expect(container).toHaveTextContent(/리뷰가 없어요/);
    });
  });

  context('with reviews', () => {
    it('renders reviews contained name, score and description', () => {
      const { queryByText } = renderReviewList(reviews);

      reviews.forEach(({ name, score, description }) => {
        expect(queryByText(name)).not.toBeNull();
        expect(queryByText(`${score}점`)).not.toBeNull();
        expect(queryByText(description)).not.toBeNull();
      });
    });
  });
});
