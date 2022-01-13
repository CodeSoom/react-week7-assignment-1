import { render } from '@testing-library/react';

import Reviews from './Reviews';
import restaurant from '../../../fixtures/restaurant';

describe('Reviews', () => {
  it('리뷰 목록을 보여준다.', () => {
    const { reviews } = restaurant;
    const { getByText } = render(<Reviews reviews={reviews} />);
    reviews.forEach(({ name, description, score }) => {
      expect(getByText(name)).toBeInTheDocument();
      expect(getByText(description)).toBeInTheDocument();
      expect(getByText(score)).toBeInTheDocument();
    });
  });
});
