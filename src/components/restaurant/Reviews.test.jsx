import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('<Reviews />', () => {
  const renderReviews = (reviews) => render(<Reviews reviews={reviews} />);

  context('with reviews', () => {
    it('renders reviews', () => {
      const reviews = [
        {
          id: 1,
          restaurantId: 1,
          name: '테스터',
          score: 5,
          description: 'Good!',
        },
      ];

      const { container } = renderReviews(reviews);

      reviews.forEach(({ name, score, description }) => {
        expect(container).toHaveTextContent(name);
        expect(container).toHaveTextContent(score);
        expect(container).toHaveTextContent(description);
      });
    });
  });

  context('without reviews', () => {
    it('renders "처음으로 리뷰를 남겨주세요!" message', () => {
      const { container } = renderReviews([]);

      expect(container).toHaveTextContent('처음으로 리뷰를 남겨주세요!');
    });
  });
});
