import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import { requestAddReview, setReviewFields } from '../modules/actions';

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
      reviews: given.reviews,
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
      it('called submit dispatch event and clear "평점", "리뷰 내용" value and loading restaurant', () => {
        given('restaurantId', () => 1);

        const { getByText } = renderRestaurantContainer();

        fireEvent.click(getByText('리뷰 남기기'));

        expect(dispatch).toBeCalledTimes(4);
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

    context('with reviews', () => {
      const reviewMock = [{
        id: 1,
        restaurantId: 1,
        name: '테스터',
        score: 5,
        description: '테스트다',
      }, {
        id: 2,
        restaurantId: 1,
        name: '테스터',
        score: 2,
        description: '테스트다2',
      },
      ];

      given('reviews', () => reviewMock);

      it('renders review title and reviews list', () => {
        const { getByText, getAllByText } = renderRestaurantContainer();

        expect(getAllByText('테스터')).toHaveLength(2);
        expect(getByText('2')).not.toBeNull();
        expect(getByText('5')).not.toBeNull();
        expect(getByText('테스트다')).not.toBeNull();
        expect(getByText('테스트다2')).not.toBeNull();
      });
    });

    // context('without reviews', () => {
    //   given('reviews', () => null
    // });
  });
});
