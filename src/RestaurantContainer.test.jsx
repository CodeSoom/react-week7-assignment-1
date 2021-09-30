import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  function renderRestaurantContainer() {
    return render(
      <RestaurantContainer
        restaurantId="1"
        onChange={dispatch}
      />,
    );
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

    it('renders review write fields', () => {
      const { getByLabelText } = renderRestaurantContainer();

      expect(getByLabelText('평점')).not.toBeNull();
      expect(getByLabelText('리뷰 내용')).not.toBeNull();
    });

    it.each`
      name             | label        | value  
      ${'score'}       | ${'평점'}     | ${'5'}
      ${'description'} | ${'리뷰 내용'} | ${'정말 최고에요'}
    `('listen $name change event', ({ name, label, value }) => {
      const { getByLabelText } = renderRestaurantContainer();

      fireEvent.change(getByLabelText(label), {
        target: { value },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeReviewFields',
        payload: { name, value },
      });
    });

    it('regists review', () => {
      const { getByLabelText } = renderRestaurantContainer();

      expect(getByLabelText('평점')).not.toBeNull();
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
