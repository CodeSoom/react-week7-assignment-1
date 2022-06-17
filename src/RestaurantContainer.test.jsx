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

    it('renders review write from', () => {
      const handelChange = jest.fn();

      const { getByLabelText } = render((
        <RestaurantContainer
          restaurantId="1"
          onChange={handelChange}
        />
      ));

      fireEvent.change(getByLabelText('평점'), {
        target: { value: '5' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeReviewField',
        payload: { name: 'score', value: '5' },
      });

      fireEvent.change(getByLabelText('리뷰 내용'), {
        target: { value: '정말 최고 :)' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeReviewField',
        payload: { name: 'description', value: '정말 최고 :)' },
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
