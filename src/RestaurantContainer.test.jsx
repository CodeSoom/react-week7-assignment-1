// 관심사: 상태바꿔주기
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
      reviewField: {
        score: '5',
        description: '짱맛',
      },
      accessToken: given.accessToken,
      reviews: [],
    }));
  });

  context('with restaurant', () => {
    given('restaurant', () => ({
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
      reviews: [{ score: 5, description: '짱맛' }],
    }));

    it('renders name and address', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('마법사주방');
      expect(container).toHaveTextContent('서울시');
    });

    describe('with accessToken"', () => {
      given('accessToken', () => 'ACCESS_TOKEN');

      it('calls dispatch with "changeReviewField" action', () => {
        const { getByLabelText } = renderRestaurantContainer();

        expect(getByLabelText('평점')).toBeInTheDocument();

        fireEvent.change(getByLabelText('평점'), {
          target: {
            name: 'score',
            value: '5',
          },
        });

        expect(dispatch).toBeCalled();
      });

      it('calls dispatch with "changeReviewField" action', () => {
        const { getByLabelText } = renderRestaurantContainer();

        expect(getByLabelText('리뷰 내용')).toBeInTheDocument();

        fireEvent.change(getByLabelText('리뷰 내용'), {
          target: {
            name: 'description',
            value: '짱맛존맛',
          },
        });

        expect(dispatch).toBeCalled();
      });

      it('calls dispatch with "sendReview" action', () => {
        const { getByText } = renderRestaurantContainer();

        expect(getByText('리뷰 남기기')).not.toBeNull();

        fireEvent.click(getByText('리뷰 남기기'));

        expect(dispatch).toBeCalled();
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
