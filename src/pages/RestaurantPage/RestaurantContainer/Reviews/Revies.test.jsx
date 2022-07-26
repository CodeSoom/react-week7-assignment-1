import { render } from '@testing-library/react';

import { RESTAURANT } from '@fixtures';

import Reviews from './Reviews';

describe('Reviews', () => {
  function renderReviews() {
    return render((
      <Reviews
        reviews={RESTAURANT.reviews}
      />
    ));
  }

  it('renders title', () => {
    const { container } = renderReviews();

    expect(container).toHaveTextContent('리뷰');
  });

  it('renders reviews', () => {
    const { container } = renderReviews();

    RESTAURANT.reviews.forEach(({ name, score, description }) => {
      expect(container).toHaveTextContent(name);
      expect(container).toHaveTextContent(score);
      expect(container).toHaveTextContent(description);
    });
  });
});
