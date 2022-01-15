import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import {
  changeReviewField,
} from './actions';

import RESTAURANT from '../fixtures/restaurant';

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  function renderRestaurantContainer() {
    return render(
      <RestaurantContainer
        restaurantId="1"
      />,
    );
  }

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: given.restaurant,
      accessToken: given.accessToken,
    }));
  });

  it('dispatches action', () => {
    renderRestaurantContainer();

    expect(dispatch).toBeCalled();
  });

  describe('RestaurantDetail Component', () => {
    context('with restaurant', () => {
      given('restaurant', () => (RESTAURANT));

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
    given('restaurant', () => (RESTAURANT));

    context('without an accessToken', () => {
      given('accessToken', () => '');

      it('doesnt render review input field', () => {
        const { queryByLabelText } = renderRestaurantContainer();

        expect(queryByLabelText('평점')).toBeNull();
        expect(queryByLabelText('리뷰 내용')).toBeNull();
      });

      it('doesnt render review submit button', () => {
        const { queryByRole } = renderRestaurantContainer();

        expect(queryByRole('button', { name: '리뷰 남기기' })).toBeNull();
      });
    });

    context('with an accessToken', () => {
      given('accessToken', () => 'ACCESS_TOKEN');

      it('renders input fields to listen change events', () => {
        const controls = [
          { label: '평점', name: 'score', value: '10' },
          { label: '리뷰 내용', name: 'description', value: 'good~' },
        ];

        const { getByLabelText } = renderRestaurantContainer();

        controls.forEach(({ label, name, value }) => {
          expect(getByLabelText(label)).not.toBeNull();

          fireEvent.change(getByLabelText(label), { target: { name, value } });

          expect(dispatch).toBeCalledWith(changeReviewField({ name, value }));
        });
      });

      it('renders a button to listen submit event', () => {
        const { getByRole } = renderRestaurantContainer();

        expect(getByRole('button', { name: '리뷰 남기기' })).not.toBeNull();

        fireEvent.click(getByRole('button', { name: '리뷰 남기기' }));

        expect(dispatch).toBeCalled();
      });
    });
  });

  describe('Reviews Component', () => {
    given('restaurant', () => (RESTAURANT));

    it('renders reviews', () => {
      const { getByText } = renderRestaurantContainer();

      expect(getByText('냥냥이')).not.toBeNull();
      expect(getByText('1점')).not.toBeNull();
      expect(getByText('good')).not.toBeNull();
    });
  });
});
