import { render } from '@testing-library/react';

import RestaurantReviews from './RestaurantReviews';

describe('RestaurantReviews', () => {
  const reviews = [
    {
      id: 1,
      name: '테스터',
      score: 5,
      description: '훌륭하다 훌륭하다 지구인놈들',
    },
    {
      id: 2,
      name: '동우',
      score: 1,
      description: '배탈남',
    },
  ];

  it('renders name and address', () => {
    const { getByText } = render(
      <RestaurantReviews reviews={reviews} />,
    );

    reviews.forEach(({
      name, score, description,
    }) => {
      expect(getByText(name)).toBeInTheDocument();
      expect(getByText(score)).toBeInTheDocument();
      expect(getByText(description)).toBeInTheDocument();
    });
  });
});
