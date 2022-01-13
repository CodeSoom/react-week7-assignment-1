// 관심사: 상태바꿔주기
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
      restaurant: given.restaurant,
    }));
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
    }));

    it('renders name and address', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('마법사주방');
      expect(container).toHaveTextContent('서울시');
    });

    it('renders input with "평점" label', () => {
      const { getByLabelText } = renderRestaurantContainer({
        path: '/restaurants/1',
      });

      expect(getByLabelText('평점')).not.toBeNull();
    });

    it('renders input with "리뷰 내용" label', () => {
      const { getByLabelText } = renderRestaurantContainer({
        path: '/restaurants/1',
      });

      expect(getByLabelText('리뷰 내용')).not.toBeNull();
    });

    it('renders "리뷰 남기기" button ', () => {
      const { getByText } = renderRestaurantContainer({
        path: '/restaurants/1',
      });

      expect(getByText('리뷰 남기기')).not.toBeNull();
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
