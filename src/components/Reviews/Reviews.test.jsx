import { render } from '@testing-library/react';

import Reviews from './Reviews';
import restaurant from '../../../fixtures/restaurant';

describe('Reviews', () => {
  context('리뷰 목록이 있으면', () => {
    it('리뷰들을 보여준다', () => {
      const { reviews } = restaurant;
      const { queryAllByText } = render(<Reviews reviews={reviews} />);

      reviews.forEach(({ name, description, score }) => {
        expect(queryAllByText(name)).not.toBeNull();
        expect(queryAllByText(description)).not.toBeNull();
        expect(queryAllByText(score)).not.toBeNull();
      });
    });
  });

  context('리뷰 목록이 없으면', () => {
    it('"리뷰가 존재하지 않습니다."를 보여준다', () => {
      const { getByText } = render(<Reviews reviews={[]} />);

      expect(getByText(/리뷰가 존재하지 않습니다\./)).not.toBeNull();
    });
  });
});
