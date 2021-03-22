import React from 'react';

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
      reviewFields: given.reviewFields,
      accessToken: given.accessToken,
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
      reviews: [{
        id: 1,
        restaurantId: 1,
        name: '테스터',
        score: 5,
        description: '훌륭하다 훌륭하다 지구인놈들',
      }],
    }));

    given('reviewFields', () => ({
      score: '',
      description: '',
    }));

    it('renders name and address', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('마법사주방');
      expect(container).toHaveTextContent('서울시');
    });

    context('without logged in', () => {
      it('renders no review write fields', () => {
        const { queryByLabelText } = renderRestaurantContainer();

        expect(queryByLabelText('평점')).toBeNull();
        expect(queryByLabelText('리뷰 내용')).toBeNull();
      });
    });

    context('with logged in', () => {
      given('accessToken', () => 'ACCESS_TOKEN');

      it('renders change events', () => {
        const { getByLabelText } = renderRestaurantContainer();

        fireEvent.change(getByLabelText('평점'), {
          target: { value: 5 },
        });

        expect(dispatch).toBeCalled();
      });

      it('renders review write fields', () => {
        const { queryByLabelText } = renderRestaurantContainer();

        expect(queryByLabelText('평점')).not.toBeNull();
        expect(queryByLabelText('리뷰 내용')).not.toBeNull();
      });

      it('renders "리뷰 남기기" button', () => {
        const { getByText } = renderRestaurantContainer();

        fireEvent.click(getByText('리뷰 남기기'));

        expect(dispatch).toBeCalledTimes(2);
      });

      it('renders reviews', () => {
        const { container } = renderRestaurantContainer();
        expect(container).toHaveTextContent('훌륭하다 훌륭하다 지구인놈들');
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
