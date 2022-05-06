import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: given.restaurant,
    accessToken: given.accessToken,
  }));

  function renderRestaurantContainer() {
    return render(<RestaurantContainer restaurantId="1" />);
  }

  it('dispatches action', () => {
    renderRestaurantContainer();

    expect(dispatch).toBeCalled();
  });

  context('with restaurant', () => {
    given('restaurant', () => ({
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
      menuItems: [
        { id: 1, restaurantId: 1, name: '스파이시 머쉬룸 버거' },
      ],
      reviews: [
        {
          id: 1, restaurantId: 1, name: '테스터', score: 5, description: '훌륭하다',
        },
      ],
    }));

    it('renders name and address', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('마법사주방');
      expect(container).toHaveTextContent('서울시');
    });

    it('renders menu items', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('스파이시 머쉬룸 버거');
    });

    it('renders reviews', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('테스터');
      expect(container).toHaveTextContent('5');
      expect(container).toHaveTextContent('훌륭하다');
    });

    context('without accessToken', () => {
      given('accessToken', () => undefined);

      it("dosen't render review form", () => {
        const { queryByLabelText, queryByText } = renderRestaurantContainer();

        expect(queryByLabelText('평점')).toBeNull();
        expect(queryByLabelText('리뷰 내용')).toBeNull();
        expect(queryByText('평가 남기기')).toBeNull();
      });
    });

    context('with accessToken', () => {
      given('accessToken', () => 'ACCESS_TOKEN');

      it('renders review form', () => {
        const { queryByLabelText, queryByText } = renderRestaurantContainer();

        expect(queryByLabelText('평점')).not.toBeNull();
        expect(queryByLabelText('리뷰 내용')).not.toBeNull();
        expect(queryByText('평가 남기기')).not.toBeNull();
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
