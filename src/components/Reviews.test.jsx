import { render } from '@testing-library/react';
import Reviews from './Reviews';

describe('Reviews', () => {
  const rendersReviews = () => render((
    <Reviews
      reviews={given.reviews}
    />
  ));
  context('with reviews', () => {
    given('reviews', () => ([
      {
        id: 10,
        name: 'tester',
        score: 2,
        description: '맛좋아!',
      },
    ]));

    it('renders reviews', () => {
      const { container } = rendersReviews();
      expect(container).toHaveTextContent('리뷰');

      given.reviews.forEach((review) => {
        expect(review).not.toBeNull();
      });
    });
  });

  context('without reviews', () => {
    given('reviews', () => (null));
    it('renders nothing', () => {
      rendersReviews();
    });
  });
});
