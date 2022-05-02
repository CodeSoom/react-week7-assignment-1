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

  it('리뷰 폼을 렌더한다.', () => {
    given('restaurant', () => ({
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
    }));

    const { queryByLabelText } = render(<RestaurantContainer
      restaurantId="1"
    />);

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰 내용')).not.toBeNull();
  });

  it('리뷰 폼에 입력 이벤트가 동작한다.', () => {
    given('restaurant', () => ({
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
    }));

    const { getByLabelText } = render(<RestaurantContainer
      restaurantId="1"
    />);

    const controls = [
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: '정말 최고!' },
    ];

    controls.forEach(({
      label, name, value,
    }) => {
      fireEvent.change(getByLabelText(label), { target: { value } });

      expect(dispatch).toBeCalledWith({
        type: 'changeReviewField',
        payload: { name, value },
      });
    });
  });
});
