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
      reviewFields: given.reviewFields,
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
    given('reviewFields', () => ({
      score: '',
      description: '',
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

  context('with review field values', () => {
    it('renders review write form', () => {
      given('restaurant', () => ({
        id: 1,
        name: '마법사주방',
        address: '서울시 강남구',
      }));
      given('reviewFields', () => ({
        score: '5',
        description: 'Good!',
      }));

      const { queryByLabelText } = renderRestaurantContainer();

      expect(queryByLabelText('평점').value).toBe('5');
      expect(queryByLabelText('리뷰 내용').value).toBe('Good!');
    });
  });

  it('listens score change event', () => {
    given('restaurant', () => ({
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
    }));
    given('reviewFields', () => ({
      score: '',
      description: '',
    }));

    const { queryByLabelText } = renderRestaurantContainer();

    fireEvent.change(queryByLabelText('평점'), {
      target: { value: '5' },
    });

    expect(dispatch).toBeCalledTimes(2);
  });

  it('listens description change event', () => {
    given('restaurant', () => ({
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
    }));
    given('reviewFields', () => ({
      score: '',
      description: '',
    }));

    const { queryByLabelText } = renderRestaurantContainer();

    fireEvent.change(queryByLabelText('리뷰 내용'), {
      target: { value: '맛있어요!' },
    });

    expect(dispatch).toBeCalledTimes(2);
  });
});
