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
      accessToken: given.accessToken,
      reviewFields: {
        score: 5,
        reviewContent: '바보들앙 이거 리뷰 아니지롱~',
      },
    }));
  });

  describe('with logined', () => {
    beforeEach(() => {
      given('accessToken', () => 'ACCEST_TOKEN');
      given('restaurant', () => ({
        id: 1,
        name: '마법사주방',
        address: '서울시 강남구',
      }));
    });
    it('renders review InputForm with value', () => {
      const { getByLabelText, getByText } = renderRestaurantContainer();

      expect(getByLabelText('평점').value).toBe('5');
      expect(getByLabelText('리뷰 내용').value).toBe('바보들앙 이거 리뷰 아니지롱~');
      expect(getByText('리뷰 남기기')).not.toBeNull();
    });

    context('when "리뷰 남기기" button click', () => {
      it('called submit dispatch event and clear "평점", "리뷰 내용" value', () => {
        const { getByText } = renderRestaurantContainer();

        fireEvent.click(getByText('리뷰 남기기'));

        expect(dispatch).toBeCalledTimes(3);
      });
    });
  });

  describe('without logined', () => {
    beforeEach(() => {
      given('accessToken', () => '');
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
