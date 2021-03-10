import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from '../RestaurantContainer';

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
      review: { score: '4', description: '맛있다!' },
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

    it('renders name and address / review', () => {
      const { container, getByDisplayValue } = renderRestaurantContainer();

      expect(container).toHaveTextContent('마법사주방');
      expect(container).toHaveTextContent('서울시');
      expect(getByDisplayValue('맛있다!')).toBeInTheDocument();
      expect(getByDisplayValue('4')).toBeInTheDocument();
    });


    it('리뷰를 입력하면 입력을 update하는 dispatch함수가 실행된다.', () => {
      const { queryByLabelText } = renderRestaurantContainer();

      const controls = [
        { label: '평점', value: '23', times: 2 },
        { label: '리뷰 내용', value: '요리를 잘하시네요!', times: 3 },
      ];

      controls.forEach(({ label, value, times }) => {
        fireEvent.change(queryByLabelText(label), {
          target: { value },
        });
        expect(dispatch).toBeCalledTimes(times);
      });
    });

    it('리뷰 남기기 버튼을 누르면 리뷰를 post하는 dispatch함수가 실행된다.', () => {
      const { queryByText } = renderRestaurantContainer();

      fireEvent.click(queryByText('리뷰 남기기'));
      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('without restaurant', () => {
    given('restaurant', () => null);

    it('renders loading', () => {
      const { queryByDisplayValue, container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('Loading');
      expect(queryByDisplayValue('맛있다!')).not.toBeInTheDocument();
      expect(queryByDisplayValue('4')).not.toBeInTheDocument();
    });
  });
});
