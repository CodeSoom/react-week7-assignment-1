// 관심사: 상태바꿔주기
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

  given('accessToken', () => 'ACCESS_TOKEN');

  describe('rendering input and button"', () => {
    it('renders input with "평점" label to call dispatch', () => {
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

    it('renders input with "리뷰 내용" label to call dispatch', () => {
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

    it('renders "리뷰 남기기" button to call dispatch', () => {
      const { getByText } = render(<ReviewContainer />);

      expect(getByText('리뷰 남기기')).not.toBeNull();

      fireEvent.click(getByText('리뷰 남기기'));

      expect(dispatch).toBeCalled();
    });
  });
});
