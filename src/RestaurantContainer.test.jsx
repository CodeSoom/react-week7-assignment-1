import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import reviews from '../fixtures/reviews';

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  function renderRestaurantContainer() {
    return render((
      <RestaurantContainer restaurantId="1" />
    ));
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

  context('without restaurant', () => {
    given('restaurant', () => null);

    it('renders loading', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('Loading');
    });
  });

  context('with restaurant', () => {
    given('restaurant', () => ({
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
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

    context('without logged-in', () => {
      it('renders no review write form', () => {
        const { container } = renderRestaurantContainer();

        expect(container).not.toHaveTextContent('평점');
        expect(container).not.toHaveTextContent('리뷰 내용');
      });
    });

    context('with logged-in', () => {
      given('accessToken', () => 'ACCESS_TOKEN');

      it('renders review write form', () => {
        const { container } = renderRestaurantContainer();

        expect(container).toHaveTextContent('평점');
        expect(container).toHaveTextContent('리뷰 내용');
      });

      it('listen change events', () => {
        const { getByLabelText } = renderRestaurantContainer();

        const controls = [
          { label: '평점', name: 'score', value: '5' },
          { label: '리뷰 내용', name: 'description', value: '최고의 맛!' },
        ];

        controls.forEach(({ label, name, value }) => {
          fireEvent.change(getByLabelText(label), { target: { value } });

          expect(dispatch).toBeCalledWith({
            type: 'changeReviewField',
            payload: { name, value },
          });
        });
      });

      it('renders "리뷰 남기기" button', () => {
        const { getByText } = renderRestaurantContainer();

        fireEvent.click(getByText('리뷰 남기기'));

        expect(dispatch).toBeCalledTimes(2);
      });

      it('render reviews', () => {
        const { queryByText } = renderRestaurantContainer();

        reviews.forEach(({ name, score, description }) => {
          expect(queryByText(name)).not.toBeNull();
          expect(queryByText(`${score}점`)).not.toBeNull();
          expect(queryByText(description)).not.toBeNull();
        });
      });
    });
  });
});
