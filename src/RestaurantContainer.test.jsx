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

  context('로그아웃 했을 때', () => {
    it('리뷰 폼을 렌더하지 않는다', () => {
      given('restaurant', () => ({
        id: 1,
        name: '마법사주방',
        address: '서울시 강남구',
      }));

      const { queryByLabelText } = render(<RestaurantContainer
        restaurantId="1"
      />);

      expect(queryByLabelText('평점')).toBeNull();
      expect(queryByLabelText('리뷰 내용')).toBeNull();
    });
  });

  context('로그인 했을 때', () => {
    // TODO: accessToken 세팅
    given('accessToken', () => 'ACCESS_TOEKEN');
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

    it('"리뷰 남기기"버튼을 출력한다.', () => {
      given('restaurant', () => ({
        id: 1,
        name: '마법사주방',
        address: '서울시 강남구',
      }));

      const { getByText } = render(
        <RestaurantContainer
          restaurantId="1"
        />,
      );

      fireEvent.change(getByText('리뷰 남기기'));

      expect(dispatch).toBeCalledTimes(1);
    });
  });

  context('리뷰가 있을 때', () => {
    given('restaurant', () => ({
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
      reviews: [{
        id: 1,
        restaurantId: 1,
        name: '피카츄',
        score: 5,
        description: '피카츄가 더 최고야!',
      },
      {
        id: 3,
        restaurantId: 1,
        name: '라이츄',
        score: 3,
        description: '라이츄가 최고야!',
      }],
    }));

    it('리뷰를 출력한다.', () => {
      const { queryByText } = render(<RestaurantContainer
        restaurantId="1"
      />);

      expect(queryByText('리뷰')).not.toBeNull();
      expect(queryByText('피카츄')).not.toBeNull();
      expect(queryByText(5)).not.toBeNull();
      expect(queryByText('피카츄가 더 최고야!')).not.toBeNull();
    });
  });

  context('리뷰가 없을 때', () => {
    given('restaurant', () => ({
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
      reviews: [],
    }));

    it('"리뷰가 없어요!"를 출력한다.', () => {
      const { queryByText } = render(<RestaurantContainer
        restaurantId="1"
      />);

      expect(queryByText('리뷰가 없어요!')).not.toBeNull();
    });
  });
});
