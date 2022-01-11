import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import RESTAURANT from '../../fixtures/restaurant';

import {
  changeReviewField,
} from '../modules/actions';

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

  context('when logged out', () => {
    given('accessToken', () => null);
    given('restaurant', () => RESTAURANT);

    it('renders no review write form', () => {
      const { queryByLabelText, queryByRole } = renderRestaurantContainer();

      expect(queryByLabelText('평점')).toBeNull();
      expect(queryByLabelText('리뷰 내용')).toBeNull();
      expect(queryByRole('button', { name: '리뷰 남기기' })).toBeNull();
    });
  });

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');
    given('restaurant', () => RESTAURANT);

    it('renders review write form', () => {
      const { queryByLabelText, queryByRole } = renderRestaurantContainer();

      expect(queryByLabelText('평점')).toBeInTheDocument();
      expect(queryByLabelText('리뷰 내용')).toBeInTheDocument();
      expect(queryByRole('button', { name: '리뷰 남기기' })).toBeInTheDocument();
    });

    it('types input, calls dispath with changeReviewField', () => {
      const { getByLabelText } = renderRestaurantContainer();

      const controls = [
        { label: '평점', name: 'score', value: '5' },
        { label: '리뷰 내용', name: 'description', value: '맛있어요!' },
      ];

      controls.forEach(({ label, name, value }) => {
        fireEvent.change(getByLabelText(label), {
          target: { value },
        });

        expect(dispatch).toBeCalledWith(
          changeReviewField({ name, value }),
        );
      });
    });

    it('clicks button, calls dispatch', async () => {
      // THINK: with thunk 함수 테스트 할지 말지 계속 고민중..
      const { getByRole } = renderRestaurantContainer();

      fireEvent.click(getByRole('button', { name: '리뷰 남기기' }));

      // load할 때 한 번,
      // button 클릭 시 한 번, 총 2 번
      expect(dispatch).toBeCalledTimes(2);
    });
  });
});
