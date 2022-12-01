import { render, screen, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import reviewControls from '../../fixtures/reviewControls';

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

  context('without restaurant', () => {
    given('restaurant', () => null);

    it('renders loading', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('Loading');
    });
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

  context('로그아웃일 경우', () => {
    it('리뷰 form이 랜더링되지 않는다', () => {
      renderRestaurantContainer();

      expect(screen.queryByLabelText('평점')).toBeNull();
      expect(screen.queryByLabelText('리뷰 내용')).toBeNull();
    });
  });

  context('로그인일 경우', () => {
    given('accessToken', () => 'ACCESS_TOKEN');
    given('restaurant', () => ({
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
    }));

    it('리뷰 작성 form이 랜더링된다', () => {
      renderRestaurantContainer();

      expect(screen.queryByLabelText('평점')).not.toBeNull();
      expect(screen.queryByLabelText('리뷰 내용')).not.toBeNull();
    });

    it('리뷰 작성 form에 changeReviewField가 호출된다', () => {
      renderRestaurantContainer();

      reviewControls.forEach(({ label, name, value }) => {
        const input = screen.getByLabelText(label);

        fireEvent.change(input, { target: { value } });

        expect(dispatch).toBeCalledWith({
          type: 'changeReviewField',
          payload: { name, value },
        });
      });
    });

    it('"리뷰 남기기" 버튼이 랜더링된다', () => {
      renderRestaurantContainer();

      fireEvent.click(screen.getByText('리뷰 남기기'));

      expect(dispatch).toBeCalledTimes(2);
    });
  });
});
