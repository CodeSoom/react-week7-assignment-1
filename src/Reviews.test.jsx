import { render } from '@testing-library/react';

import Reviews from './Reviews';

import REVIEWS from '../fixtures/reviews';

describe('Reviews', () => {
  function renderReviews(reviews) {
    return render((<Reviews reviews={reviews} />));
  }

  it('renders Reviews', () => {
    renderReviews();
  });

  context('with reviews', () => {
    it('renders reviews', () => {
      const { getByText } = renderReviews(REVIEWS);

      expect(getByText('맛있어요')).not.toBeNull();
      expect(getByText('최고예요')).not.toBeNull();
    });
  });

  context('without reviews', () => {
    it('no renders reviews', () => {
      const { container } = renderReviews([]);

      expect(container).toHaveTextContent('');
    });
  });
});
