import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ReviewFormContainer from './ReviewFormContainer';

import RESTAURANT from '../../fixtures/restaurant';

import {
  changeReviewField,
  sendReview,
} from '../modules/actions';

describe('ReviewFormContainer', () => {
  const dispatch = jest.fn();

  function renderReviewFormContainer() {
    return render(<ReviewFormContainer restaurantId="1" />);
  }

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      accessToken: given.accessToken,
      restaurant: given.restaurant,
    }));
  });

  context('when logged out', () => {
    given('accessToken', () => null);
    given('restaurant', () => RESTAURANT);

    it('renders no review write form', () => {
      const { queryByLabelText, queryByRole } = renderReviewFormContainer();

      expect(queryByLabelText('평점')).toBeNull();
      expect(queryByLabelText('리뷰 내용')).toBeNull();
      expect(queryByRole('button', { name: '리뷰 남기기' })).toBeNull();
    });
  });

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');
    given('restaurant', () => RESTAURANT);

    it('renders review write form', () => {
      const { queryByLabelText, queryByRole } = renderReviewFormContainer();

      expect(queryByLabelText('평점')).toBeInTheDocument();
      expect(queryByLabelText('리뷰 내용')).toBeInTheDocument();
      expect(queryByRole('button', { name: '리뷰 남기기' })).toBeInTheDocument();
    });

    it.each([
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: '맛있어요!' },
    ])('types input, calls dispath with changeReviewField', ({ label, name, value }) => {
      const { getByLabelText } = renderReviewFormContainer();

      fireEvent.change(getByLabelText(label), {
        target: { value },
      });

      expect(dispatch).toBeCalledWith(
        changeReviewField({ name, value }),
      );
    });

    it('clicks button, calls dispatch', async () => {
      // THINK: with thunk 함수 테스트 할지 말지 계속 고민중..
      // 피드백 받고 OK 나면 주석 제거
      const { getByRole } = renderReviewFormContainer();

      fireEvent.click(getByRole('button', { name: '리뷰 남기기' }));

      const actions = dispatch.mock.calls.map((call) => call[0]);

      expect(dispatch).toBeCalled();
      // 내부 thunk 테스트
      expect(JSON.stringify(actions))
        .toEqual(
          JSON.stringify([
            sendReview({ restaurantId: '1' }),
          ]),
        );
    });
  });
});
