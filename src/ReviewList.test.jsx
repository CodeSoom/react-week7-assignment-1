import { render } from '@testing-library/react';

import ReviewList from './ReviewList';

import reviews from '../fixtures/reviews';

describe('ReviewList', () => {
  it('renders reviewer name, score and description', () => {
    const { container } = render((
      <ReviewList reviews={reviews} />
    ));

    reviews.forEach(({ name, score, description }) => {
      expect(container).toHaveTextContent(name);
      expect(container).toHaveTextContent(score);
      expect(container).toHaveTextContent(description);
    });
  });
});
