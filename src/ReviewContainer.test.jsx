// 관심사: 상태바꿔주기
// ToDo: 테스트 이름을 구체적으로 어떤 것에 대한 테스트인지 명확히하기
import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import ReviewContainer from './ReviewContainer';

describe('ReviewContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      reviewField: {
        score: '5',
        description: '짱맛',
      },
      accessToken: given.accessToken,
    }));
  });

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    describe('with "평점", "리뷰 내용"input and "리뷰 남기기"button"', () => {
      it('calls dispatch with "changeReviewField" action', () => {
        const { getByLabelText } = render(<ReviewContainer />);

        expect(getByLabelText('평점')).toBeInTheDocument();

        fireEvent.change(getByLabelText('평점'), {
          target: {
            name: 'score',
            value: '5',
          },
        });

        expect(dispatch).toBeCalled();
      });

      it('calls dispatch with "changeReviewField" action', () => {
        const { getByLabelText } = render(<ReviewContainer />);

        expect(getByLabelText('리뷰 내용')).toBeInTheDocument();

        fireEvent.change(getByLabelText('리뷰 내용'), {
          target: {
            name: 'description',
            value: '짱맛존맛',
          },
        });

        expect(dispatch).toBeCalled();
      });

      it('calls dispatch with "sendReview" action', () => {
        const { getByText } = render(<ReviewContainer />);

        expect(getByText('리뷰 남기기')).not.toBeNull();

        fireEvent.click(getByText('리뷰 남기기'));

        expect(dispatch).toBeCalled();
      });
    });
  });
});
