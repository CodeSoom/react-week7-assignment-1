import { render } from '@testing-library/react';

import Reviews from './Reviews';

import restaurant from '../../fixtures/restaurant';

describe('Reviews', () => {
  const { reviews } = restaurant;

  function renderReviews() {
    return render((
      <Reviews reviews={reviews} />
    ));
  }
  it('renders review', () => {
    const { container } = renderReviews();

    reviews.forEach(({ description }) => (
      expect(container).toHaveTextContent(description)));
  });
});
