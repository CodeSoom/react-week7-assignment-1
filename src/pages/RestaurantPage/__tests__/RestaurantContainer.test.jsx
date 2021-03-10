import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from '../RestaurantContainer';

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
      review: { score: '4', description: '맛있다!' },
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
      const { container, getByDisplayValue } = renderRestaurantContainer();

      expect(container).toHaveTextContent('마법사주방');
      expect(container).toHaveTextContent('서울시');
      expect(getByDisplayValue('맛있다!')).toBeInTheDocument();
      expect(getByDisplayValue('4')).toBeInTheDocument();
    });
  });

  context('without restaurant', () => {
    given('restaurant', () => null);

    it('renders loading', () => {
      const { queryByDisplayValue, container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('Loading');
      expect(queryByDisplayValue('맛있다!')).not.toBeInTheDocument();
      expect(queryByDisplayValue('4')).not.toBeInTheDocument();
    });
  });
});
