import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  function renderRestaurantContainer() {
    return render(<RestaurantContainer restaurantId="1" />);
  }

  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurant: given.restaurant,
      reviewField: {
        score: '',
        description: '',
      },
    }));
  });

  // useDispatch의 dispatch액션
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

  it('changes reviewField and dispatch change action', () => {
    given('restaurant', () => ({
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
    }));

    const { getByLabelText } = renderRestaurantContainer();
    const input = getByLabelText('평점');

    expect(input).not.toBeNull();

    fireEvent.change(input, { target: { value: 5 } });

    expect(dispatch).toBeCalled();
  });

  it('submit reviewField and dispatch submit action', () => {
    given('restaurant', () => ({
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
    }));

    const { getByText } = renderRestaurantContainer();
    const input = getByText('리뷰 남기기');

    expect(input).not.toBeNull();

    fireEvent.click(input);

    expect(dispatch).toBeCalled();
  });
});
