import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  const renderReviews = (reviews) => render(<Reviews reviews={reviews} />);

  context('with reviews', () => {
    it('renders review', () => {
      const reviews = [
        {
          id: 1,
          name: '좋은 사람',
          scroe: 5,
          description: 'JMT',
        },
        {
          id: 2,
          name: '나쁜 사람',
          score: 1,
          description: '존노맛',
        },
      ];

      const { container } = renderReviews(reviews);

      reviews.forEach((review) => {
        expect(container).toHaveTextContent(review.name);
        expect(container).toHaveTextContent(review.description);
      });
    });
  });

  context('with no review in reviews', () => {
    it('render no review message', () => {
      const { container } = renderReviews([]);

      expect(container).toHaveTextContent('등록된 리뷰가 없어요!');
    });
  });
});
