import { render } from '@testing-library/react';

import RestaurantReviews from './RestaurantReviews';

describe('RestaurantReviews', () => {
  const reviews = [
    {
      id: 1,
      name: '손님',
      score: 5,
      description: '아주 좋아요',
    },
    {
      id: 3,
      name: '불청객',
      score: 3,
      description: '그냥 뭐',
    },
  ];

  it('renders reviews', () => {
    const { container } = render(
      <RestaurantReviews reviews={reviews} />,
    );

    expect(container).toHaveTextContent('아주 좋아요');
    expect(container).toHaveTextContent('그냥 뭐');
  });
});
