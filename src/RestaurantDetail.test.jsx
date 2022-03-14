import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

import restaurant from '../fixtures/restaurant';

describe('RestaurantDetail', () => {
  it('이름, 주소, 메뉴, 리뷰 목록을 보여준다', () => {
    const { container } = render(
      <RestaurantDetail restaurant={restaurant} />,
    );

    expect(container).toHaveTextContent(restaurant.name);
    expect(container).toHaveTextContent(restaurant.address);
    expect(container).toHaveTextContent(restaurant.menuItems[0].name);
    expect(container).toHaveTextContent(restaurant.reviews[0].name);
    expect(container).toHaveTextContent(restaurant.reviews[0].description);
    expect(container).toHaveTextContent(restaurant.reviews[0].score);
  });
});
