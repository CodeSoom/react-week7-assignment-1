import { render } from '@testing-library/react';

import Reviews from './Reviews';

import restaurant from '../../fixtures/restaurant';

describe('Reviews', () => {
  const reviews = restaurant.reviews.reverse();

  it('renders title', () => {
    const { container } = render(<Reviews review={reviews} />);

    expect(container).toHaveTextContent('리뷰');
  });

  it('renders reviews', () => {
    const { getAllByRole } = render(<Reviews review={reviews} />);

    const reviewList = getAllByRole('listitem');

    reviewList.forEach((review, index) => {
      expect(review).toContain(reviews[index].nmae);
      expect(review).toContain(reviews[index].score);
      expect(review).toContain(reviews[index].description);
    });
  });
});
