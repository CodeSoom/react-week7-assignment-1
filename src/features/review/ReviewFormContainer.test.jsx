import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ReviewFormContainer from './ReviewFormContainer';

describe('ReviewFormContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    reviewFields: {
      score: 0,
      description: '',
    },
  }));

  context('when the form is submitted', () => {
    it('calls the dispatch function', () => {
      const { getByRole } = render((
        <ReviewFormContainer />
      ));

      const submitButton = getByRole('button');

      fireEvent.click(submitButton);

      expect(dispatch).toBeCalled();

      expect(submitButton).toHaveTextContent('리뷰 남기기');
    });
  });

  context('when textbox is changed', () => {
    it('calls the dispatch function', () => {
      const { getByLabelText, getAllByRole } = render((
        <ReviewFormContainer />
      ));

      const textbox = getAllByRole('textbox');

      fireEvent.change(textbox[0], { target: { value: '5' } });

      expect(dispatch).toBeCalled();

      expect(getByLabelText('평점')).toBeInTheDocument();
      expect(getByLabelText('리뷰 내용')).toBeInTheDocument();
    });
  });
});
