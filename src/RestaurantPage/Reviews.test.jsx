import { render } from '@testing-library/react';

import Reviews from './Reviews';

import REVIEWS from '../../fixtures/reviews';

describe('Reviews', () => {
  const renderReviews = (reviews) => render((
    <Reviews
      reviews={reviews}
    />
  ));

  context('리뷰 데이터가 있을 시', () => {
    it('리뷰가 랜더링된다.', () => {
      const { container } = renderReviews(REVIEWS);

      expect(container).toHaveTextContent('맛있어요👍');
      expect(container).toHaveTextContent('우욱');
    });
  });

  context('리뷰 데이터가 없을 시', () => {
    it('"리뷰가 없어요!" 문구가 랜더링 된다', () => {
      [[], null, undefined].forEach((reviews) => {
        const { container } = renderReviews(reviews);

        expect(container).toHaveTextContent('리뷰가 없어요!');
      });
    });
  });
});
