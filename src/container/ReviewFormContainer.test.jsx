import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import ReviewFormContainer from './ReviewFormContainer';

jest.mock('react-redux');

describe('ReviewFormContainer', () => {
  const dispatch = jest.fn();

  function renderReviewFormContainer() {
    return render(
      <ReviewFormContainer />,
    );
  }

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      reviewField: {
        score: 0,
        description: '',
      },
    }));
  });

  it('renders review fields', () => {
    const { container } = renderReviewFormContainer();

    expect(container).toHaveTextContent('평점');
    expect(container).toHaveTextContent('리뷰 내용');
    expect(container).toHaveTextContent('리뷰 남기기');
  });

  describe('change review fields', () => {
    it('calls review field change action when score is changed', () => {
      const { getByLabelText } = renderReviewFormContainer();
      const value = '10';

      fireEvent.change(getByLabelText('평점'), { target: { value } });

      expect(dispatch).toBeCalledWith({
        type: 'changeReviewField',
        payload: {
          name: 'score',
          value,
        },
      });
    });

    it('calls review field change action when review is changed', () => {
      const { getByLabelText } = renderReviewFormContainer();
      const value = '리뷰내용이다';

      fireEvent.change(getByLabelText('리뷰 내용'), { target: { value } });

      expect(dispatch).toBeCalledWith({
        type: 'changeReviewField',
        payload: {
          name: 'description',
          value,
        },
      });
    });
  });
});
