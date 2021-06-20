import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

describe('RestaurantDetail', () => {
  it('renders name and address', () => {
    const restaurant = {
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
      reviews: [
        {
          id: 1,
          restaurantId: 1,
          name: '테스터',
          score: 5,
          description: '훌륭하다 훌륭하다 지구인놈들',
        }],
    };
    const { container } = render(<RestaurantDetail restaurant={restaurant} />);

    expect(container).toHaveTextContent('테스터');
    expect(container).toHaveTextContent('5점');
    expect(container).toHaveTextContent('훌륭하다 훌륭하다 지구인놈들');
  });
});
