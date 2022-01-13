// 관심사: 상태바꿔주기
import { render, fireEvent } from '@testing-library/react';

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
      restaurant: given.restaurant,
    }));
  });

  context('2/ with restaurant', () => {
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

    describe('rendering input and button"', () => {
      it('renders input with "평점" label to call dispatch', () => {
        const { getByLabelText } = renderRestaurantContainer({
          path: '/restaurants/1',
        });

        expect(getByLabelText('평점')).toBeInTheDocument();

        fireEvent.change(getByLabelText('평점'), {
          target: {
            name: 'rating',
            value: '5',
          },
        });

        expect(dispatch).toBeCalled();
      });

      it('renders input with "리뷰 내용" label to call dispatch', () => {
        const { getByLabelText } = renderRestaurantContainer({
          path: '/restaurants/1',
        });

        expect(getByLabelText('리뷰 내용')).toBeInTheDocument();

        fireEvent.change(getByLabelText('평점'), {
          target: {
            name: 'description',
            value: '짱맛존맛',
          },
        });

        expect(dispatch).toBeCalled();
      });

      it('renders "리뷰 남기기" button ', () => {
        const { getByText } = renderRestaurantContainer({
          path: '/restaurants/1',
        });

        expect(getByText('리뷰 남기기')).not.toBeNull();
      });
    });

    context('3/ without restaurant', () => {
      given('restaurant', () => null);

      it('renders loading', () => {
        const { container } = renderRestaurantContainer();

        expect(container).toHaveTextContent('Loading');
      });
    });
  });
});
