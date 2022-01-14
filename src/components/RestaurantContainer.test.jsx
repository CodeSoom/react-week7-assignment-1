import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: given.restaurant,
    accessToken: given.accessToken,
  }));

  function renderRestaurantContainer() {
    return render(<RestaurantContainer restaurantId="1" />);
  }

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('dispatches action', () => {
    renderRestaurantContainer();

    expect(dispatch).toBeCalled();
  });

  context('with restaurant', () => {
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

    it('renders name and address', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('마법사주방');
      expect(container).toHaveTextContent('서울시');
    });

    it('renders reviews', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('리뷰');

      given.restaurant.reviews.forEach((reivew) => {
        expect(reivew).not.toBeNull();
      });
    });

    context('when logged in', () => {
      given('accessToken', () => 'ACCESS_TOKEN');

      it('renders input  ', () => {
        const { queryByRole } = renderRestaurantContainer();

        expect(queryByRole('textbox')).not.toBeNull();
      });
    });
    context('when logged ', () => {
      given('accessToken', () => '');

      it('renders input  ', () => {
        const { queryByRole } = renderRestaurantContainer();

        expect(queryByRole('textbox')).toBeNull();
      });
    });
  });

  context('without restaurant', () => {
    given('restaurant', () => null);

    it('renders loading', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('Loading');
    });
  });
});
