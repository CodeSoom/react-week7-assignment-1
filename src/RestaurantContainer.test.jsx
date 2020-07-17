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
      reviewField: given.reviewField,
    }));
  });

  it('dispatches action', () => {
    beforeEach(() => {
      given('restaurant', () => ({
        id: 1,
        name: '',
        address: '',
        reviews: [{
          id: 1, restaurantId: 1, name: '테스터', score: 5, description: '훌륭하다 훌륭하다 지구인놈들',
        }, {
          id: 3, restaurantId: 1, name: '테스터', score: 3, description: 'Hi!',
        }],
      }));

      given('reviewField', () => ({
        score: '',
        description: '',
      }));
    });

    renderRestaurantContainer();

    expect(dispatch).toBeCalled();
  });

  context('with restaurant', () => {
    beforeEach(() => {
      given('restaurant', () => ({
        id: 1,
        name: '마법사주방',
        address: '서울시 강남구',
        reviews: [{
          id: 1, restaurantId: 1, name: '테스터', score: 5, description: '훌륭하다 훌륭하다 지구인놈들',
        }, {
          id: 3, restaurantId: 1, name: '테스터', score: 3, description: 'Hi!',
        }],
      }));

      given('reviewField', () => ({
        score: '',
        description: '',
      }));
    });

    it('renders name and address', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('마법사주방');
      expect(container).toHaveTextContent('서울시');
    });
  });

  context('without restaurant', () => {
    given('restaurant', () => null);
    given('reviewField', () => ({
      score: '',
      description: '',
    }));

    it('renders loading', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('Loading');
    });
  });

  // TODO : control의 의미 파악 후 리팩토링 할 예정
  context('when change inputs', () => {
    it('change score input', () => {
      const { getByLabelText } = renderRestaurantContainer();

      fireEvent.change(getByLabelText('평점'), {
        target: { value: 'newCore' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeReviewField',
        payload: { name: 'score', value: 'newCore' },
      });
    });

    it('change description input', () => {
      const { getByLabelText } = renderRestaurantContainer();

      fireEvent.change(getByLabelText('내용'), {
        target: { value: 'newDescription' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeReviewField',
        payload: { name: 'description', value: 'newDescription' },
      });
    });
  });

  // it('click button ', () => {
  //   const { getByRole } = renderRestaurantContainer();;

  //   fireEvent.click(getByRole('button', { name: '리뷰 남기기' }));

  //   expect(dispatch).toBeCalledTimes(1);
  // });
});
