import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import { changeReviewField } from '../actions';

import restaurant from '../../fixtures/restaurant';

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
      accessToken: given.accessToken,
    }));
  });

  it('dispatches action', () => {
    renderRestaurantContainer();

    expect(dispatch).toBeCalled();
  });

  context('with restaurant', () => {
    given('restaurant', () => (restaurant));

    it('renders name and address', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('마녀주방');
      expect(container).toHaveTextContent('서울시 강남구');
    });
  });

  context('without restaurant', () => {
    given('restaurant', () => null);

    it('renders loading', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('Loading');
    });
  });

  context('with an access token', () => {
    given('accessToken', () => 'TOKEN');
    given('restaurant', () => (restaurant));

    context('when input fields are changed', () => {
      it('dispatches changeReviewField action', () => {
        const { getByLabelText } = renderRestaurantContainer();

        fireEvent.change(getByLabelText('리뷰 내용'), {
          target: { value: '노맛' },
        });

        expect(dispatch).toBeCalledWith(changeReviewField({
          name: 'description', value: '노맛',
        }));
      });
    });

    context('when "리뷰 남기기" is clicked', () => {
      it('dispatches sendReview action', () => {
        const { getByText } = renderRestaurantContainer();

        fireEvent.click(getByText('리뷰 남기기'));

        expect(dispatch).toBeCalledTimes(2);
      });
    });
  });

  context('without an access token', () => {
    given('accessToken', () => null);

    it('does not render a review form', () => {
      const { container } = renderRestaurantContainer();

      expect(container).not.toHaveTextContent('리뷰');
    });
  });
});
