import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import { reviewFormcontrols } from '../../fixtures/controls';

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  function renderRestaurantContainer() {
    return render(<RestaurantContainer restaurantId="1" />);
  }

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      accessToken: given.accessToken,
      restaurant: given.restaurant,
      reviewFields: {
        score: '',
        description: '',
        error: '',
      },
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

  context('without logged-in', () => {
    given('accessToken', () => '');

    it('doesn\'t render review write fields', () => {
      const { queryByLabelText } = renderRestaurantContainer();

      expect(queryByLabelText('평점')).toBeNull();
      expect(queryByLabelText('리뷰 내용')).toBeNull();
    });
  });

  context('with logged-in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders review write fields to listen to change event', () => {
      const { getByLabelText } = renderRestaurantContainer();

      reviewFormcontrols.forEach(({ label, name, value }) => {
        fireEvent.change(getByLabelText(label), {
          target: { value },
        });

        expect(dispatch).toBeCalledWith({
          type: 'restaurants/changeReviewField',
          payload: { name, value },
        });
      });
    });

    it('renders \'리뷰 남기기\' button', () => {
      const { getByText } = renderRestaurantContainer();

      fireEvent.click(getByText('리뷰 남기기'));

      expect(dispatch).toBeCalledTimes(2);
    });
  });
});
