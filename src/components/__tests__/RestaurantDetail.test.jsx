import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from '@components/RestaurantDetail';

describe('RestaurantDetail', () => {
  const restaurant = {
    id: 1,
    name: '마법사주방',
    address: '서울시 강남구',
    menuItems: [{
      id: 1252,
      restaurantId: 4,
      name: '밀면',
    },
    ],
    reviews: [
      {
        id: 2,
        restaurantId: 4,
        name: '테스터',
        score: 3,
        description: '갸우뚱~',
      },
    ],
  };

  function renderRestaurant() {
    return render(<RestaurantDetail restaurant={restaurant} />);
  }

  it('renders name and address', () => {
    const { container } = renderRestaurant();

    expect(container).toHaveTextContent('마법사주방');
    expect(container).toHaveTextContent('서울시');
  });

  it('renders menu and reivew', () => {
    const { menuItems, reviews } = restaurant;

    const { getByRole, getAllByRole } = renderRestaurant();

    expect(getByRole('heading', { name: '메뉴' })).toBeInTheDocument();
    menuItems.forEach((menuItem) => {
      expect(getAllByRole('list')[0]).toHaveTextContent(menuItem.name);
    });

    expect(getByRole('heading', { name: '리뷰' })).toBeInTheDocument();
    reviews.forEach((review) => {
      expect(getAllByRole('list')[1]).toHaveTextContent(review.name);
    });
  });
});
