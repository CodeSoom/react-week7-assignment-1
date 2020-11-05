import React from 'react';

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

    context('loginin이 되지 않으면', () => {
      it('review를 생성하지 않습니다.', () => {
        const { queryByLabelText } = renderRestaurantContainer();

        expect(queryByLabelText('평점')).toBeNull();
        expect(queryByLabelText('리뷰 내용')).toBeNull();
      });
    });

    context('loggin 되어있으면,', () => {
      given('accessToken', () => 'ACCESS_TOKEN');

      it('review를 생성됩니다.', () => {
        const { getByLabelText } = renderRestaurantContainer();

        expect(getByLabelText('평점')).not.toBeNull();
        expect(getByLabelText('리뷰 내용')).not.toBeNull();
      });

      it('score change 이벤트가 발생하면 dispatch가 호출된다.', () => {
        const { getByLabelText } = renderRestaurantContainer();

        fireEvent.change(getByLabelText('평점'), {
          target: { value: '5' },
        });

        expect(dispatch).toBeCalledWith({
          type: 'changeReviewField',
          payload: { name: 'score', value: '5' },
        });
      });

      it('description change 이벤트가 발생하면 dispatch가 호출된다.', () => {
        const { getByLabelText } = renderRestaurantContainer();

        fireEvent.change(getByLabelText('리뷰 내용'), {
          target: { value: '정말 최고 :)' },
        });

        expect(dispatch).toBeCalledWith({
          type: 'changeReviewField',
          payload: { name: 'description', value: '정말 최고 :)' },
        });
      });

      it('리뷰 남기기 버튼을 클릭하면 dispatch가 호출됩니다.', () => {
        const { getByText } = renderRestaurantContainer();

        fireEvent.click(getByText('리뷰 남기기'));

        expect(dispatch).toBeCalledTimes(2);
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
