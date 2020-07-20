import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import ReviewFormContainer from './ReviewFormContainer';

describe('ReviewFormContainer', () => {
  const dispatch = jest.fn();
  const restaurantId = 1;

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    reviewFields: {
      score: '',
      description: '',
    },
  }));

  beforeEach(() => {
    dispatch.mockClear();
  });

  function renderReviewFormContainer() {
    return render((
      <ReviewFormContainer restaurantId={restaurantId} />
    ));
  }

  it('listens the review fields change event', () => {
    const { getByLabelText } = renderReviewFormContainer();

    const controls = [
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: '끼요옷' },
    ];

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), {
        target: { value },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeReviewFields',
        payload: { name, value },
      });
    });
  });

  describe('click submit button', () => {
    it('submit new review', () => {
      const { getByText } = renderReviewFormContainer();

      const sendReviewButton = getByText('리뷰 남기기');

      fireEvent.click(sendReviewButton);
      expect(dispatch).toBeCalled();
    });
  });
});
