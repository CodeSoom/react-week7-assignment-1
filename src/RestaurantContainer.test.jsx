import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  function renderRestaurantContainer() {
    return render((
      <RestaurantContainer
        restaurantId="1"
      />
    ));
  }

  function givenRestaurant() {
    return given('restaurant', () => ({
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
    }));
  }

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: given.restaurant,
      reviewFields: {
        score: '',
        description: '',
      },
      accessToken: given.accessToken,
    }));
  });

  it('dispatches action', () => {
    renderRestaurantContainer();

    expect(dispatch).toBeCalled();
  });

  context('with restaurant', () => {
    givenRestaurant();

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

  describe('Login and Logout', () => {
    context('with login', () => {
      givenRestaurant();
      given('accessToken', () => 'ACCESS_TOKEN');

      it('renders review form', () => {
        const { container } = renderRestaurantContainer();

        expect(container).toHaveTextContent('평점');
        expect(container).toHaveTextContent('리뷰 내용');
      });

      it('change input fields', () => {
        givenRestaurant();
        const { getByLabelText } = renderRestaurantContainer();

        fireEvent.change(getByLabelText('평점'), {
          target: { value: '5' },
        });

        expect(dispatch).toBeCalledWith({
          type: 'changeReviewFields',
          payload: {
            name: 'score',
            value: '5',
          },
        });

        fireEvent.change(getByLabelText('리뷰 내용'), {
          target: { value: '정말 맛있습니다..호에에엥' },
        });

        expect(dispatch).toBeCalledWith({
          type: 'changeReviewFields',
          payload: {
            name: 'description',
            value: '정말 맛있습니다..호에에엥',
          },
        });
      });

      it('renders review send button', () => {
        givenRestaurant();
        const { getByText } = renderRestaurantContainer();

        fireEvent.click(getByText('리뷰 남기기'));

        expect(dispatch).toBeCalledTimes(2);
      });
    });

    context('without logout', () => {
      givenRestaurant();
      given('accessToken', () => null);

      it('no renders review form', () => {
        const { container } = renderRestaurantContainer();

        expect(container).not.toHaveTextContent('평점');
        expect(container).not.toHaveTextContent('리뷰 내용');
      });
    });
  });
});
