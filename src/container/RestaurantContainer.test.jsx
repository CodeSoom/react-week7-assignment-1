import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

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

    context('without logged-in', () => {
      it('리뷰 작성 폼이 보여지지 않습니다.', () => {
        const { queryByLabelText } = renderRestaurantContainer();

        expect(queryByLabelText('평점')).toBeNull();
        expect(queryByLabelText('리뷰 내용')).toBeNull();
      });
    });

    context('when logged-in', () => {
      given('accessToken', () => 'ACCESS_TOKEN');

      it('리뷰 작성 폼이 보여집니다.', () => {
        const { queryByLabelText } = renderRestaurantContainer();

        expect(queryByLabelText('평점')).not.toBeNull();
        expect(queryByLabelText('리뷰 내용')).not.toBeNull();
      });

      it('input의 내용이 바뀌면 onChange이벤트가 호출됩니다.', () => {
        const { getByLabelText } = renderRestaurantContainer();

        const controls = [
          { label: '평점', name: 'score', value: '5' },
          { label: '리뷰 내용', name: 'description', value: ' 최고에요' },
        ];

        controls.forEach(({ label, name, value }) => {
          fireEvent.change(getByLabelText(label), { target: { value } });

          expect(dispatch).toBeCalledWith({
            type: 'changeReviewField',
            payload: { name, value },
          });
        });
      });

      it('리뷰 남기기 버튼을 누르면 dispatch가 호출됩니다.', () => {
        const { getByText } = renderRestaurantContainer();

        fireEvent.click(getByText('리뷰 남기기'));

        expect(dispatch).toBeCalledTimes(2);
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
});
