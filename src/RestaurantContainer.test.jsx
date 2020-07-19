import React from 'react';

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
  });

  context('without restaurant', () => {
    given('restaurant', () => null);

    it('renders loading', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('Loading');
    });
  });

  it('renders review write form', () => {
    const { queryByLabelText } = render((
      <RestaurantContainer restaurantId="1" />
    ));
    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰 내용')).not.toBeNull();
  });

  it('listen score change event', () => {
    const { getByLabelText } = render((
      <RestaurantContainer restaurantId="1" />
    ));

    fireEvent.change(getByLabelText('score'), {
      target: { value: '5' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeReviewField',
      payload: { name: 'score', value: '5' },
    });
  });

  it('listen description change event', () => {
    const { getByLabelText } = render((
      <RestaurantContainer restaurantId="1" />
    ));

    fireEvent.change(getByLabelText('리뷰 내용'), {
      target: { value: '진짜진짜진짜진짜맛있는집이에요' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeReviewField',
      payload: { name: 'description', value: '진짜진짜진짜진짜맛있는집이에요' },
    });
  });
});
