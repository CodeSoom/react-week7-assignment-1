import { render } from '@testing-library/react';

import Reviews from './Reviews';

import REVIEWS from '../fixtures/reviews';

describe('Reviews', () => {
  function renderReviews() {
    return render((<Reviews reviews={REVIEWS} />));
  }

  it('renders Reviews', () => {
    renderReviews();
  });
});
