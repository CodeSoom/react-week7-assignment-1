import { render } from '@testing-library/react';
import Reviews from './Reviews';

describe('Reviews', () => {
  given('reviews', () => ([
    {
      id: 10,
      name: 'tester',
      score: 2,
      description: '맛좋아!',
    },
  ]));

  it('renders reviews', () => {
    const { container } = render((
      <Reviews
        reviews={given.reviews}
      />
    ));

    expect(container).toHaveTextContent('리뷰');

    given.reviews.forEach((review) => {
      expect(review).not.toBeNull();
    });
  });
});
