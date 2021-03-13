import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import REVIEW from '../fixtures/review';
import REVIEWS from '../fixtures/reviews';
import ACCESS_TOKEN from '../fixtures/accessToken';

const { score: SCORE, description: DESCRIPTION } = REVIEW;

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  function renderRestaurantContainer() {
    return render(<RestaurantContainer restaurantId="1" />);
  }

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      accessToken: given.accessToken,
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
      reviews: REVIEWS,
    }));
    given('accessToken', () => ACCESS_TOKEN);

    it('renders name and address', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('마법사주방');
      expect(container).toHaveTextContent('서울시');
    });

    it('renders review list', () => {
      const { queryByText } = renderRestaurantContainer();

      expect(queryByText('테스터')).not.toBeNull();
      expect(queryByText('5점')).not.toBeNull();
      expect(queryByText('맛있어요')).not.toBeNull();
    });
  });

  context('without restaurant', () => {
    given('restaurant', () => null);

    it('renders loading', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('Loading');
    });
  });

  context('when logged in', () => {
    given('restaurant', () => ({
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
      reviews: REVIEWS,
    }));

    given('accessToken', () => ACCESS_TOKEN);

    it('renders review form', () => {
      const { queryByLabelText, queryByText } = renderRestaurantContainer();

      expect(queryByLabelText('평점')).not.toBeNull();
      expect(queryByLabelText('리뷰 내용')).not.toBeNull();
      expect(queryByText('리뷰 남기기')).not.toBeNull();
    });

    it('listens change event', () => {
      const { queryByLabelText } = renderRestaurantContainer();

      const controls = [{
        label: '평점',
        name: 'score',
        value: SCORE,
      }, {
        label: '리뷰 내용',
        name: 'description',
        value: DESCRIPTION,
      }];

      controls.forEach(({ label, name, value }) => {
        fireEvent.change(queryByLabelText(label), {
          target: {
            value,
          },
        });

        expect(dispatch).toBeCalledWith({
          type: 'changeReviewFields',
          payload: {
            name,
            value,
          },
        });
      });
    });

    it('listens change event', () => {
      const { getByText } = renderRestaurantContainer();

      fireEvent.click(getByText('리뷰 남기기'));

      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('when logged out', () => {
    given('restaurant', () => ({
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
      reviews: REVIEWS,
    }));

    given('accessToken', () => null);

    it('renders review form', () => {
      const { queryByLabelText, queryByText } = renderRestaurantContainer();

      expect(queryByLabelText('평점')).toBeNull();
      expect(queryByLabelText('리뷰 내용')).toBeNull();
      expect(queryByText('리뷰 남기기')).toBeNull();
    });
  });
});
