import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

import REVIEWS from '../fixtures/reviews';

describe('Reviews', () => {
  function renderReviewList(reviews) {
    return render(<Reviews reviews={reviews} />);
  }

  context('without reviews', () => {
    it('renders no reviews message', () => {
      const { container } = renderReviewList();

      expect(container).toHaveTextContent(/리뷰가 없어요/);
    });
  });

  context('with reviews', () => {
    it('renders reviews contained name, score and description', () => {
      const { queryByText } = renderReviewList(REVIEWS);

      REVIEWS.forEach(({ name, score, description }) => {
        expect(queryByText(name)).not.toBeNull();
        expect(queryByText(`${score}점`)).not.toBeNull();
        expect(queryByText(description)).not.toBeNull();
      });
    });
  });
});
