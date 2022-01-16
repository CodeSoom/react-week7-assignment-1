import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';
import restaurant from '../fixtures/restaurant';
import reviewForm from '../fixtures/reviewForm';
import { handleReviewForm } from './actions';

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
      reviewForm,
    }));
  });

  it('dispatches action', () => {
    renderRestaurantContainer();

    expect(dispatch).toBeCalled();
  });

  context('with restaurant', () => {
    given('restaurant', () => restaurant);

    it('renders name and address', () => {
      const { findByText } = renderRestaurantContainer();

      expect(findByText(/마법사주방/)).not.toBeNull();
      expect(findByText(/서울시/)).not.toBeNull();
    });

    it('리뷰 작성 폼을 보여준다.', () => {
      const { getByLabelText } = renderRestaurantContainer();

      expect(getByLabelText('평점')).not.toBeNull();
      expect(getByLabelText('이름')).not.toBeNull();
      expect(getByLabelText('후기')).not.toBeNull();
    });

    it('리뷰 작성 폼을 수정시 폼 상태를 변경하는 디스패치를 실행한다.', () => {
      const { getByLabelText } = renderRestaurantContainer();

      const scoreInput = getByLabelText('평점');
      const score = 5;

      fireEvent.change(scoreInput, { target: { value: score } });

      expect(dispatch).toBeCalledWith(handleReviewForm('score', score));
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
