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

  given('accessToken', () => null);

  given('reviewFields', () => ({ score: '1', description: '그만큼 맜없다는 거지' }));

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: given.restaurant,
      accessToken: given.accessToken,
      reviewFields: given.reviewFields,
    }));
  });

  it('dispatches action for get restaurnt information', () => {
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
    given('accessToken', () => '12345678');
    it('changes input fields value', () => {
      const { getByLabelText } = renderRestaurantContainer();

      const scoreInput = getByLabelText('score');
      const reviewInput = getByLabelText('description');

      expect(scoreInput.value).toBe('1');
      fireEvent.change(scoreInput, { target: { value: '3' } });
      expect(dispatch).toHaveBeenCalledWith({
        type: 'changeReviewFields',
        payload: { name: 'score', value: '3' },
      });

      expect(reviewInput.value).toBe('그만큼 맜없다는 거지');
      fireEvent.change(reviewInput, { target: { value: '그만큼 맜있다는 거지' } });
      expect(dispatch).toHaveBeenCalledWith({
        type: 'changeReviewFields',
        payload: { name: 'description', value: '그만큼 맜있다는 거지' },
      });
    });

    it('submits input fields values', () => {
      const { getByRole } = renderRestaurantContainer();
      fireEvent.click(getByRole('button', { name: '리뷰 남기기' }));

      expect(dispatch).toHaveBeenCalledTimes(2);
    });
  });

  context('when not logged in', () => {
    it("doesn't render review form", () => {
      const { queryByLabelText, queryByRole } = renderRestaurantContainer();

      expect(queryByLabelText('평점')).toBeNull();
      expect(queryByLabelText('리뷰')).toBeNull();
      expect(queryByRole('button', { name: '리뷰 남기기' })).toBeNull();
    });
  });
});
