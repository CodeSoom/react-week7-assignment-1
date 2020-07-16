import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  function renderRestaurantContainer() {
    return render(<RestaurantContainer restaurantId="1" />);
  }

  context('with logined', () => {
    beforeEach(() => {
      dispatch.mockClear();
      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        restaurant: given.restaurant,
        accessToken: 'ACCESS_TOKEN',
        reviewFields: {
          score: 5,
          reviewContent: '바보들앙 이거 리뷰 아니지롱~',
        },
      }));
    });
    it('renders review InputForm with value', () => {
      const { getByLabelText, getByDisplayValue } = renderRestaurantContainer();

      expect(getByLabelText('평점').value).toBe(5);
      expect(getByLabelText('리뷰 내용').value).toBe('바보들앙 이거 리뷰 아니지롱~');
      expect(getByDisplayValue('리뷰 남기기')).not.toBeNull();
    });

    // TODO 상태에 따라 바뀌는지 체크해보기
  });

  context('without logined', () => {
    beforeEach(() => {
      dispatch.mockClear();
      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        restaurant: given.restaurant,
        accessToken: '',
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
  });
});
