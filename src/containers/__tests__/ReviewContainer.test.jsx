import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import ReviewContainer from '@containers/ReviewContainer';

describe('ReviewContainer', () => {
  const dispatch = jest.fn();

  context('when logged in ', () => {
    beforeEach(() => {
      dispatch.mockClear();
      useDispatch.mockImplementation(() => dispatch);
    });

    it('changes input fields value', () => {
      const { getByLabelText } = render(<ReviewContainer />);

      const scoreInput = getByLabelText('평점');
      const reviewInput = getByLabelText('리뷰');

      fireEvent.change(scoreInput, { target: { value: '3' } });
      expect(dispatch).toHaveBeenCalledWith({
        type: 'changeReviewFields',
        payload: { name: 'score', value: '3' },
      });

      fireEvent.change(reviewInput, { target: { value: '그만큼 맜있다는 거지' } });
      expect(dispatch).toHaveBeenCalledWith({
        type: 'changeReviewFields',
        payload: { name: 'description', value: '그만큼 맜있다는 거지' },
      });
    });

    it('submits input fields values', () => {
      const { getByRole } = render((<ReviewContainer />));

      fireEvent.click(getByRole('button', { name: '리뷰 남기기' }));

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
