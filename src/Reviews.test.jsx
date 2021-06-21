import { render } from '@testing-library/react';

import Reviews from './Reviews';

import REVIEWS from '../fixtures/reviews';

describe('Reviews', () => {
  context('with reviews', () => {
    it('reders reviews title', () => {
      const reviews = REVIEWS;

      const { container } = render(<Reviews reviews={reviews} />);

      expect(container).toHaveTextContent('리뷰');
    });

    it('reders reivews list', () => {
      const reviews = [
        {
          id: 10,
          name: '새로운테스터',
          score: '3',
          description: '평범해요',
        },
        {
          id: 1,
          name: '테스터',
          score: '5',
          description: '훌륭해요',
        },
      ];

      const { container } = render(<Reviews reviews={reviews} />);

      reviews.forEach((review) => {
        expect(container).toHaveTextContent(review.name);
        expect(container).toHaveTextContent(review.description);
      });
    });
  });

  context('without reviews', () => {
    it('renders no reviews message', () => {
      [[], null, undefined].forEach((reviews) => {
        const { container } = render(<Reviews reviews={reviews} />);

        expect(container).toHaveTextContent('리뷰가 없어요!');
      });
    });
  });
});
