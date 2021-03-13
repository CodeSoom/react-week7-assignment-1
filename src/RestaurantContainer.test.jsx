import React from 'react';

import { fireEvent, render } from '@testing-library/react';

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
  });

  context('without restaurant', () => {
    given('restaurant', () => null);

    it('renders loading', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('Loading');
    });
  });

  context('with login', () => {
    given('restaurant', () => ({
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
    }));

    it('renders a rating and a review', () => {
      const { queryByLabelText } = renderRestaurantContainer();

      const currentInputs = [
        { label: '평점' },
        { label: '리뷰내용' },
      ];

      currentInputs.forEach(({ label }) => {
        expect(queryByLabelText(label)).not.toBeNull();
      });
    });

    it('listens onChange', () => {
      const { queryByLabelText } = renderRestaurantContainer();

      const currentInputs = [
        { label: '평점', name: 'rating', value: '3' },
        { label: '리뷰내용', name: 'content', value: '보통이에요' },
      ];

      currentInputs.forEach(({ label, value }) => {
        fireEvent.change(queryByLabelText(label), {
          target: { value },
        });
        expect(dispatch).toBeCalled();
      });
    });
  });
});
