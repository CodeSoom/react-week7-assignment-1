// 관심사: 상태바꿔주기
import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import ReviewContainer from './ReviewContainer';

describe('ReviewContainer', () => {
  const dispatch = jest.fn();

  function renderReviewContainer() {
    return render(<ReviewContainer />);
  }

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  describe('rendering input and button"', () => {
    it('renders input with "평점" label to call dispatch', () => {
      const { getByLabelText } = renderReviewContainer({
        path: '/restaurants/1',
      });

      expect(getByLabelText('평점')).toBeInTheDocument();

      fireEvent.change(getByLabelText('평점'), {
        target: {
          name: 'rating',
          value: '5',
        },
      });

      expect(dispatch).toBeCalled();
    });

    it('renders input with "리뷰 내용" label to call dispatch', () => {
      const { getByLabelText } = renderReviewContainer({
        path: '/restaurants/1',
      });

      expect(getByLabelText('리뷰 내용')).toBeInTheDocument();

      fireEvent.change(getByLabelText('평점'), {
        target: {
          name: 'description',
          value: '짱맛존맛',
        },
      });

      expect(dispatch).toBeCalled();
    });

    it('renders "리뷰 남기기" button ', () => {
      const { getByText } = renderReviewContainer({
        path: '/restaurants/1',
      });

      expect(getByText('리뷰 남기기')).not.toBeNull();
    });
  });
});
