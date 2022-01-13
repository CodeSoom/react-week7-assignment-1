import { render } from '@testing-library/react';

import Reviews from './Reviews';
import restaurant from '../../../fixtures/restaurant';

describe('Reviews', () => {
  it('리뷰 목록을 보여준다.', () => {
    const { reviews } = restaurant;
    const { queryAllByText } = render(<Reviews reviews={reviews} />);

    reviews.forEach(({ name, description, score }) => {
      expect(queryAllByText(name)).not.toBeNull();
      expect(queryAllByText(description)).not.toBeNull();
      expect(queryAllByText(score)).not.toBeNull();
    });
  });
});
