import { render } from '@testing-library/react';

import Reviews from './Reviews';

import restaurant from '../../fixtures/restaurant';

describe('Reviews', () => {
  function renderReviews() {
    return render(<Reviews reviews={restaurant.reviews} />);
  }

  it('renders reviews', () => {
    const { container } = renderReviews();

    expect(container).toHaveTextContent('맛있어요');
  });
});
