import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from 'container/RestaurantContainer';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  function renderRestaurantContainer() {
    return render(<RestaurantContainer restaurantId="1" />);
  }

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: (given.restaurant || null),
      accessToken: (given.accessToken || ''),
      reviewField: (given.reviewField || { score: '', description: '' }),
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
      reviews: [
        {
          id: 1, restaurantId: 1, name: '테스터', score: 5, description: '훌륭하다 훌륭하다 지구인놈들',
        },
      ],
    }));

    it('renders name and address', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('마법사주방');
      expect(container).toHaveTextContent('서울시');
    });
  });

  context('without restaurant', () => {
    it('renders loading', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('Loading');
    });
  });

  context('with accessToken', () => {
    given('restaurant', () => ({
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
      reviews: [
        {
          id: 1, restaurantId: 1, name: '테스터', score: 5, description: '훌륭하다 훌륭하다 지구인놈들',
        },
      ],
    }));

    given('accessToken', () => 'token');

    it('render review form', () => {
      const { getByLabelText } = renderRestaurantContainer();

      expect(getByLabelText('평점')).not.toBeNull();
      expect(getByLabelText('리뷰 내용')).not.toBeNull();
    });

    describe('change review fields', () => {
      it('calls review field change action when score is changed', () => {
        const { getByLabelText } = renderRestaurantContainer();
        const value = '10';

        fireEvent.change(getByLabelText('평점'), { target: { value } });

        expect(dispatch).toBeCalledWith({
          type: 'changeReviewField',
          payload: {
            name: 'score',
            value,
          },
        });
      });

      it('calls review field change action when review is changed', () => {
        const { getByLabelText } = renderRestaurantContainer();
        const value = '리뷰내용이다';

        fireEvent.change(getByLabelText('리뷰 내용'), { target: { value } });

        expect(dispatch).toBeCalledWith({
          type: 'changeReviewField',
          payload: {
            name: 'description',
            value,
          },
        });
      });
    });

    describe('click register review button', () => {
      it('call postreview', () => {
        const { getByText } = renderRestaurantContainer();

        fireEvent.click(getByText('리뷰 남기기'));

        expect(dispatch).toBeCalled();
      });
    });
  });

  context('without accessToken', () => {
    given('restaurant', () => ({
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
      reviews: [
        {
          id: 1, restaurantId: 1, name: '테스터', score: 5, description: '훌륭하다 훌륭하다 지구인놈들',
        },
      ],
    }));

    given('accessToken', () => '');

    given('reviewField', () => ({
      score: '',
      description: '',
    }));

    it('doesn\'t not render the review form', () => {
      const { queryByLabelText } = renderRestaurantContainer();

      expect(queryByLabelText('평점')).not.toBeInTheDocument();
      expect(queryByLabelText('리뷰 내용')).not.toBeInTheDocument();
    });
  });
});
