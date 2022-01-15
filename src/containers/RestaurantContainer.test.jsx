import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  function renderRestaurantContainer() {
    return render(<RestaurantContainer restaurantId="1" />);
  }

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      accessToken: given.accessToken,
      restaurant: given.restaurant,
    }));
  });

  it('dispatches action', () => {
    renderRestaurantContainer();

    expect(dispatch).toBeCalled();
  });

  describe('RestaurantDetail Component', () => {
    context('with restaurant', () => {
      given('restaurant', () => ({
        id: 1,
        name: '마법사주방',
        address: '서울시 강남구',
      }));

      it('renders name and address', () => {
        const { container } = renderRestaurantContainer();

        expect(container).toHaveTextContent('마법사주방');
        expect(container).toHaveTextContent('서울시');
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

  describe('Reviews Component', () => {
    context('with reviews', () => {
      given('restaurant', () => ({
        id: 1,
        name: '마법사주방',
        address: '서울시 강남구',
        reviews: [
          {
            description: '훌륭하다 훌륭하다 지구인놈들',
            id: 1,
            name: '테스터',
            restaurantId: 1,
            score: 5,
          },
        ],
      }));

      it('renders review', () => {
        const { container } = renderRestaurantContainer();

        expect(container).toHaveTextContent('테스터');
        expect(container).toHaveTextContent('5점');
        expect(container).toHaveTextContent('훌륭하다 훌륭하다 지구인놈들');
      });
    });

    context('without reviews', () => {
      given('restaurant', () => ({
        id: 1,
        name: '마법사주방',
        address: '서울시 강남구',
        reviews: [],
      }));

      it('renders no reviews message', () => {
        const { container } = renderRestaurantContainer();

        expect(container).toHaveTextContent('리뷰가 없어요');
      });
    });
  });
});
