import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from '@containers/RestaurantContainer';

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  function renderRestaurantContainer() {
    return render(<RestaurantContainer restaurantId="1" />);
  }

  given('restaurant', () => ({
    id: 1,
    name: '마법사주방',
    address: '서울시 강남구',
  }));

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

  context('when logged in ', () => {
    beforeEach(() => {
      dispatch.mockClear();
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        restaurant: given.restaurant,
      }));
    });

    it('changes input fields value', () => {
      const { getByLabelText } = render(<RestaurantContainer />);

      const scoreInput = getByLabelText('평점');
      const reviewInput = getByLabelText('리뷰');

      fireEvent.change(scoreInput, { target: { value: '3' } });
      expect(dispatch).toHaveBeenCalledWith({
        type: 'changeReviewFields',
        payload: { name: 'score', value: '3' },
      });

      fireEvent.change(reviewInput, { target: { value: '그만큼 맜있다는 거지' } });
      expect(dispatch).toHaveBeenCalledWith({
        type: 'changeReviewFields',
        payload: { name: 'description', value: '그만큼 맜있다는 거지' },
      });
    });

    it('submits input fields values', () => {
      const { getByRole } = render(<RestaurantContainer />);
      fireEvent.click(getByRole('button', { name: '리뷰 남기기' }));

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
