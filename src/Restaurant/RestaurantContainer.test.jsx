import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import restaurant from '../../fixtures/restaurant';

describe('RestaurantContainer', () => {
  const reviewField = {
    score: '',
    description: '',
  };

  const accessToken = 'ACCESS_TOKEN';

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
      accessToken: given.accessToken,
    }));
  });

  it('dispatches action', () => {
    beforeEach(() => {
      given('restaurant', () => (restaurant));
      given('reviewField', () => (reviewField));
      given('accessToken', () => (accessToken));
    });

    renderRestaurantContainer();

    expect(dispatch).toBeCalled();
  });

  context('with restaurant', () => {
    beforeEach(() => {
      given('restaurant', () => (restaurant));
      given('reviewField', () => (reviewField));
      given('accessToken', () => (accessToken));
    });

    it('renders name and address', () => {
      const { container, getByLabelText, getByRole } = renderRestaurantContainer();

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent('서울 강남구');

      expect(getByLabelText('평점')).toHaveAttribute('type', 'number');
      expect(getByLabelText('내용')).toHaveAttribute('type', 'text');

      expect(getByRole('button', { name: '리뷰 남기기' })).toBeInTheDocument();
    });
  });

  context('without restaurant', () => {
    beforeEach(() => {
      given('restaurant', () => null);
      given('reviewField', () => (reviewField));
      given('accessToken', () => (accessToken));
    });

    it('renders loading', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('Loading');
    });
  });

  context('when change inputs', () => {
    beforeEach(() => {
      given('restaurant', () => (restaurant));
      given('reviewField', () => (reviewField));
      given('accessToken', () => (accessToken));
    });

    it('change inputs', () => {
      const { getByLabelText } = renderRestaurantContainer();

      const controls = [
        { label: '평점', name: 'score', value: '3' },
        { label: '내용', name: 'description', value: 'newDescription' },

      ];

      controls.forEach((control) => {
        const { label, name, value } = control;
        fireEvent.change(getByLabelText(label), {
          target: { value },
        });

        expect(dispatch).toBeCalledWith({
          type: 'changeReviewField',
          payload: { name, value },
        });
      });
    });
  });

  it('click button ', () => {
    beforeEach(() => {
      given('restaurant', () => (restaurant));
      given('reviewField', () => (reviewField));
      given('accessToken', () => (accessToken));
    });

    const { getByRole } = renderRestaurantContainer();

    fireEvent.click(getByRole('button', { name: '리뷰 남기기' }));

    expect(dispatch).toBeCalledTimes(2);
  });
});
