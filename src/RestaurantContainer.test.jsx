import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import RESTAURANT from '../fixtures/restaurant';

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
    given('restaurant', () => RESTAURANT);

    it('renders name and address', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('마녀주방');
      expect(container).toHaveTextContent('서울시');
    });

    it('renders review', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('맛있어요');
    });

    context('when logged in', () => {
      given('accessToken', () => 'ACCESS_TOKEN');

      it('renders review form', () => {
        const { container } = renderRestaurantContainer();

        expect(container).toHaveTextContent('리뷰 남기기');
      });
    });

    context('when not logged in', () => {
      given('accessToken', () => '');

      it('do not renders review form', () => {
        const { queryByText } = renderRestaurantContainer();

        expect(queryByText('리뷰 남기기')).toBeNull();
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
