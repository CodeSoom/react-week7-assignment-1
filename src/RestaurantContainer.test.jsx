import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import REVIEWS from '../fixtures/reviews';

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
      reviews: REVIEWS,
    }));

    it('renders name and address', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('마법사주방');
      expect(container).toHaveTextContent('서울시');
    });

    context('without restaurant', () => {
      given('restaurant', () => null);

      it('renders loading', () => {
        const { container } = renderRestaurantContainer();

        expect(container).toHaveTextContent('Loading');
      });
    });

    describe('Authentication success', () => {
      given('accessToken', () => 'ACCESS_TOKEN');

      it('renders review write form', () => {
        const { container } = renderRestaurantContainer();

        expect(container).toHaveTextContent('평점');
        expect(container).toHaveTextContent('리뷰 내용');
      });

      it('changes reviewFields', () => {
        const { getByLabelText } = renderRestaurantContainer();

        fireEvent.change(getByLabelText('평점'), {
          target: { value: '5' },
        });

        expect(dispatch).toBeCalled();

        fireEvent.change(getByLabelText('리뷰 내용'), {
          target: { value: '최고인듯!' },
        });

        expect(dispatch).toBeCalled();
      });

      it('listens click event', () => {
        const { getByText } = renderRestaurantContainer();

        fireEvent.click(getByText('리뷰 남기기'));

        expect(dispatch).toBeCalled();
      });
    });

    it('reders reivews list', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('리뷰');
      // expect(container).toHaveTextContent('5');
      // expect(container).toHaveTextContent('훌륭하다 지구놈들');
    });
  });

  context('Authentication fail', () => {
    given('accessToken', () => null);

    it('renders no review write form', () => {
      const { queryByText } = renderRestaurantContainer();

      expect(queryByText('평점')).toBeNull();
      expect(queryByText('리뷰 내용')).toBeNull();
    });
  });
});
