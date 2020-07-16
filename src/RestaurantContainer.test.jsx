import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import restaurant from '../fixtures/restaurant';
import reviewFields from '../fixtures/reviewFields';

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
      reviewFields: given.reviewFields,
    }));
  });

  it('dispatches action', () => {
    renderRestaurantContainer();

    expect(dispatch).toBeCalled();
  });

  context('with restaurant', () => {
    given('restaurant', () => restaurant);
    given('reviewFields', () => reviewFields);

    it('renders name and address', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent(restaurant.name);
      expect(container).toHaveTextContent(restaurant.address);
    });
  });

  context('without restaurant', () => {
    given('restaurant', () => null);

    it('renders loading', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('Loading');
    });
  });

  context('with review field values', () => {
    it('renders review write form', () => {
      given('restaurant', () => restaurant);
      given('reviewFields', () => reviewFields);

      const { queryByLabelText } = renderRestaurantContainer();

      expect(queryByLabelText('평점').value).toBe('5');
      expect(queryByLabelText('리뷰 내용').value).toBe('Good!');
    });
  });

  it('listens score change event', () => {
    given('restaurant', () => restaurant);
    given('reviewFields', () => ({
      score: '',
      description: 'Good!',
    }));

    const { queryByLabelText } = renderRestaurantContainer();

    fireEvent.change(queryByLabelText('평점'), {
      target: { value: '5' },
    });

    expect(dispatch).toBeCalledTimes(2);
  });

  it('listens description change event', () => {
    given('restaurant', () => restaurant);
    given('reviewFields', () => ({
      score: '5',
      description: '',
    }));

    const { queryByLabelText } = renderRestaurantContainer();

    fireEvent.change(queryByLabelText('리뷰 내용'), {
      target: { value: '맛있어요!' },
    });

    expect(dispatch).toBeCalledTimes(2);
  });

  it('renders submit button', () => {
    given('restaurant', () => restaurant);
    given('reviewFields', () => reviewFields);

    const { getByText } = renderRestaurantContainer();

    expect(getByText('리뷰 남기기')).not.toBeNull();
  });
});
