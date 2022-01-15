import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import {
  changeReviewField,
} from './actions';

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

  describe('RestaurantDetail Component', () => {
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
  });

  describe('ReviewForm Component', () => {
    it('renders input fields to change the input value', () => {
      given('restaurant', () => ({
        id: 1,
        name: '마법사주방',
        address: '서울시 강남구',
      }));

      const controls = [
        { label: '평점', name: 'score', value: '10' },
        { label: '리뷰 내용', name: 'description', value: 'good~' },
      ];

      const { getByLabelText } = renderRestaurantContainer();

      controls.forEach(({ label, name, value }) => {
        fireEvent.change(getByLabelText(label), { target: { name, value } });

        expect(dispatch).toBeCalledWith(changeReviewField({ name, value }));
      });
    });
  });
});
