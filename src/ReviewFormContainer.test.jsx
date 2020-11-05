import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import ReviewFormContainer from './ReviewFormContainer';

jest.mock('react-redux');

describe('ReviewFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      reviewFields: {},
      accessToken: given.accessToken,
    }));
  });

  context('when logged-in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders input-controls', () => {
      const { getByLabelText } = render(
        <ReviewFormContainer />,
      );

      fireEvent.change(getByLabelText('평점'), {
        target: { value: 3 },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeReviewField',
        payload: {
          name: 'score',
          value: '3',
        },
      });
    });

    it('renders write-review button', () => {
      const { queryByText, getByText } = render(
        <ReviewFormContainer />,
      );

      expect(queryByText('리뷰 남기기')).not.toBeNull();

      fireEvent.click(getByText('리뷰 남기기'));

      expect(dispatch).toBeCalled();
    });
  });

  context('when logged out', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('doesnt render input-controls and button', () => {
      const { queryByText, queryByLabelText } = render(
        <ReviewFormContainer />,
      );

      expect(queryByText('리뷰 남기기')).toBeNull();
      expect(queryByLabelText('평점')).toBeNull();
    });
  });
});
