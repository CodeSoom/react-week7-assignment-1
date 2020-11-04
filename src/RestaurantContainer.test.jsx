import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { changeReviewField } from './actions';

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

    context('with accessToken', () => {
      given('accessToken', () => ({
        accessToken: 'qwer!',
      }));

      it('renders review write form', () => {
        const { getByLabelText, getByText } = renderRestaurantContainer();

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

          expect(dispatch).toBeCalledWith(changeReviewField({ name, value }));
        });

        fireEvent.click(getByText('리뷰 남기기'));

        expect(dispatch).toBeCalled();
      });
    });

    context('without accessToken', () => {
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
