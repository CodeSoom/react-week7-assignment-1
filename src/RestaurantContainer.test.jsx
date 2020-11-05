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
      accessToken: given.accessToken,
      reviewField: {
        score: '',
        description: '',
      },
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
          id: 1,
          restaurantId: 1,
          name: '테스터',
          score: 5,
          description: '훌륭하다 훌륭하다 지구인놈들',
        },
      ],
    }));

    it('renders name and address', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('마법사주방');
      expect(container).toHaveTextContent('서울시');
    });

    it('renders reviews', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('테스터');
      expect(container).toHaveTextContent('5점');
      expect(container).toHaveTextContent('훌륭하다 훌륭하다 지구인놈들');
    });

    context('when logged in', () => {
      given('accessToken', () => 'ACCESSTOKEN');

      it('renders review write form', () => {
        const { getByLabelText, getByText } = renderRestaurantContainer();

        expect(getByLabelText('평점')).not.toBeNull();
        expect(getByLabelText('리뷰 내용')).not.toBeNull();
        expect(getByText('리뷰 남기기')).not.toBeNull();
      });

      it('listens change events', () => {
        const { getByLabelText } = renderRestaurantContainer();

        const controls = [
          {
            label: '평점',
            name: 'score',
            value: '5',
          },
          {
            label: '리뷰 내용',
            name: 'description',
            value: '구름이 두둥실 떠다니는 맛!',
          },
        ];

        controls.forEach(({ label, name, value }) => {
          const input = getByLabelText(label);

          fireEvent.change(input, { target: { value } });

          expect(dispatch).toBeCalledWith({
            type: 'changeReviewField',
            payload: { name, value },
          });
        });
      });

      it('listens click event', () => {
        const { getByText } = renderRestaurantContainer();

        fireEvent.click(getByText('리뷰 남기기'));

        expect(dispatch).toBeCalled();
      });
    });

    context('when logged out', () => {
      given('accessToken', () => null);

      it('renders no review write form', () => {
        const { queryByLabelText, queryByText } = renderRestaurantContainer();

        expect(queryByLabelText('평점')).toBeNull();
        expect(queryByLabelText('리뷰 내용')).toBeNull();
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
