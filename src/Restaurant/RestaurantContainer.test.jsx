import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  const restaurant = {
    id: 1,
    name: '양천주가',
    address: '서울시',
    reviews: [{
      id: 1, restaurantId: 1, name: '테스터', score: 5, description: '훌륭하다 훌륭하다 지구인놈들',
    }, {
      id: 3, restaurantId: 1, name: '테스터', score: 3, description: 'Hi!',
    }],
  };

  const reviewField = {
    score: '',
    description: '',
  };

  const accessToken = 'ACCESS_TOKEN';

  const dispatch = jest.fn();

  function renderRestaurantContainer() {
    return render(<RestaurantContainer restaurantId="1" />);
  }

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: given.restaurant,
      reviewField: given.reviewField,
      accessToken: given.accessToken,
    }));
  });

  it('dispatches action', () => {
    beforeEach(() => {
      given('restaurant', () => (restaurant));
      given('reviewField', () => (reviewField));
      given('accessToken', () => (accessToken));
    });

    renderRestaurantContainer();

    expect(dispatch).toBeCalled();
  });

  context('with restaurant', () => {
    beforeEach(() => {
      given('restaurant', () => (restaurant));
      given('reviewField', () => (reviewField));
      given('accessToken', () => (accessToken));
    });

    it('renders name and address', () => {
      const { container, getByLabelText, getByRole } = renderRestaurantContainer();

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent('서울시');

      expect(getByLabelText('평점')).toHaveAttribute('type', 'number');
      expect(getByLabelText('내용')).toHaveAttribute('type', 'text');

      expect(getByRole('button', { name: '리뷰 남기기' })).toBeInTheDocument();
    });
  });

  context('without restaurant', () => {
    beforeEach(() => {
      given('restaurant', () => null);
      given('reviewField', () => (reviewField));
      given('accessToken', () => (accessToken));
    });

    it('renders loading', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('Loading');
    });
  });

  // TODO : control의 의미 파악 후 리팩토링 할 예정
  context('when change inputs', () => {
    beforeEach(() => {
      given('restaurant', () => (restaurant));
      given('reviewField', () => (reviewField));
      given('accessToken', () => (accessToken));
    });

    it('change score input', () => {
      const { getByLabelText } = renderRestaurantContainer();

      fireEvent.change(getByLabelText('평점'), {
        target: { value: '3' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeReviewField',
        payload: { name: 'score', value: '3' },
      });
    });

    it('change description input', () => {
      const { getByLabelText } = renderRestaurantContainer();

      fireEvent.change(getByLabelText('내용'), {
        target: { value: 'newDescription' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeReviewField',
        payload: { name: 'description', value: 'newDescription' },
      });
    });
  });

  it('click button ', () => {
    beforeEach(() => {
      given('restaurant', () => (restaurant));
      given('reviewField', () => (reviewField));
      given('accessToken', () => (accessToken));
    });

    const { getByRole } = renderRestaurantContainer();

    fireEvent.click(getByRole('button', { name: '리뷰 남기기' }));

    expect(dispatch).toBeCalledTimes(2);
  });
});
