import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

describe('RestaurantDetail', () => {
  const restaurant = {
    id: 1,
    name: '마법사주방',
    address: '서울시 강남구',
    menuItems: [
      { id: 1, restaurantId: 1, name: '스파이시 머쉬룸 버거' },
    ],
    reviews: [
      {
        id: 1, restaurantId: 1, name: '테스터', score: 5, description: '훌륭하다',
      },
    ],
  };

  const renderRestaurantDetail = () => render((
    <RestaurantDetail
      restaurant={restaurant}
    />
  ));

  it('renders name and address', () => {
    const { container } = renderRestaurantDetail();

    expect(container).toHaveTextContent('마법사주방');
    expect(container).toHaveTextContent('서울시');
  });

  it('renders menu items', () => {
    const { container } = renderRestaurantDetail();

    expect(container).toHaveTextContent('스파이시 머쉬룸 버거');
  });

  it('renders reviews', () => {
    const { container } = renderRestaurantDetail();

    expect(container).toHaveTextContent('테스터');
    expect(container).toHaveTextContent('5');
    expect(container).toHaveTextContent('훌륭하다');
  });
});
