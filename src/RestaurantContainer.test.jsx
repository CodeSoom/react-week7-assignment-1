import { fireEvent, render } from '@testing-library/react';

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

    it('renders review write form', () => {
      const { queryByLabelText, getByLabelText } = renderRestaurantContainer();

      expect(queryByLabelText('평점')).not.toBeNull();
      expect(queryByLabelText('리뷰 내용')).not.toBeNull();

      // TODO : 평점(score) 입력에 대한 onChange
      fireEvent.change(getByLabelText('평점'), {
        target: { value: '5' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'updateReviewField',
        payload: { name: 'score', value: '5' },
      });

      // TODO : 리뷰 내용(description) 입력에 대한 onChange
      fireEvent.change(getByLabelText('리뷰 내용'), {
        target: { value: '맛있어요' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'updateReviewField',
        payload: { name: 'description', value: '맛있어요' },
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
