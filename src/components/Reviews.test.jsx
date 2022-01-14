import { render } from '@testing-library/react';
import Reviews from './Reviews';

describe('Reviews', () => {
  given('restaurant', () => ({
    id: 1,
    name: '마법사주방',
    address: '서울시 강남구',
    reviews: [
      {
        id: 10,
        name: 'tester',
        score: 2,
        description: '맛좋아!',
      },
    ],
  }));

  it('renders reviews', () => {
    const { container } = render((
      <Reviews
        reviews={given.restaurant.reviews}
      />
    ));

    expect(container).toHaveTextContent('리뷰');

    given.restaurant.reviews.forEach((review) => {
      expect(review).not.toBeNull();
    });
  });
});
