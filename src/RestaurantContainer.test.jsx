import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import restaurantFixture from '../fixtures/restaurant';

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
      reviewFields: {
        score: '',
        description: '',
      },
      accessToken: given.accessToken,
    }));
  });

  it('dispatches action', () => {
    renderRestaurantContainer();

    expect(dispatch).toBeCalled();
  });

  context('with restaurant', () => {
    given('restaurant', () => (restaurantFixture));

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
    it('renders review write fields', () => {
      given('restaurant', () => ({
        id: 1,
        name: '마법사주방',
        address: '서울시 강남구',
        reviews: [{
          id: 1, restaurantId: 1, name: '테스터', score: 5, description: '훌륭하다 훌륭하다 지구인놈들',
        }],
      }));
      const { queryByLabelText } = renderRestaurantContainer();

      expect(queryByLabelText('평점')).toBeNull();
      expect(queryByLabelText('리뷰 내용')).toBeNull();
    });

    // it('renders review header', () => {
    //   given('restaurant', () => ({
    //     id: 1,
    //     name: '마법사주방',
    //     address: '서울시 강남구',
    //   }));
    //   const { container } = renderRestaurantContainer();

    //   expect(container).toHaveTextContent('리뷰');
    // });
  });

  context('with logged-in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');
    it('renders review write fields', () => {
      given('restaurant', () => ({
        id: 1,
        name: '마법사주방',
        address: '서울시 강남구',
        reviews: [{
          id: 1, restaurantId: 1, name: '테스터', score: 5, description: '훌륭하다 훌륭하다 지구인놈들',
        }],
      }));
      const { queryByLabelText } = renderRestaurantContainer();

      expect(queryByLabelText('평점')).not.toBeNull();
      expect(queryByLabelText('리뷰 내용')).not.toBeNull();
    });

    it('listens change events', () => {
      given('restaurant', () => ({
        id: 1,
        name: '마법사주방',
        address: '서울시 강남구',
        reviews: [{
          id: 1, restaurantId: 1, name: '테스터', score: 5, description: '훌륭하다 훌륭하다 지구인놈들',
        }],
      }));
      const { getByLabelText } = renderRestaurantContainer();

      const controls = [
        { label: '평점', name: 'score', value: '5' },
        { label: '리뷰 내용', name: 'description', value: '정말 최고 :)' },
      ];

      controls.forEach(({ label, name, value }) => {
        fireEvent.change(getByLabelText(label), { target: { value } });

        expect(dispatch).toBeCalledWith({
          type: 'changeReviewField',
          payload: { name, value },
        });
      });
    });

    it('renders "리뷰 남기기" button', () => {
      given('restaurant', () => ({
        id: 1,
        name: '마법사주방',
        address: '서울시 강남구',
        reviews: [{
          id: 1, restaurantId: 1, name: '테스터', score: 5, description: '훌륭하다 훌륭하다 지구인놈들',
        }],
      }));
      const { getByText } = renderRestaurantContainer();

      fireEvent.click(getByText('리뷰 남기기'));

      expect(dispatch).toBeCalledTimes(2);
    });
  });
});
