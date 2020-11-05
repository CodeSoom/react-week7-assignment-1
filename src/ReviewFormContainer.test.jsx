import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import ReviewFormContainer from './ReviewFormContainer';

jest.mock('react-redux');

describe('ReviewFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      reviewFields: {},
    }));
  });

  it('renders input-controls', () => {
    const { queryByLabelText } = render(
      <ReviewFormContainer />,
    );

    expect(queryByLabelText('평점')).not.toBeNull();

    // fireEvent.change(getByLabelText('E-mail'), {
    //   target: { value: 'tester@example.com' },
    // });

    // expect(dispatch).toBeCalledWith({
    //   type: 'changeLoginField',
    //   payload: {
    //     name: 'email',
    //     value: 'tester@example.com',
    //   },
    // });
  });

  it('renders write-review button', () => {
    const { queryByText, getByText } = render(
      <ReviewFormContainer />,
    );

    expect(queryByText('리뷰 남기기')).not.toBeNull();

    fireEvent.click(getByText('리뷰 남기기'));

    // expect(dispatch).toBeCalled();
  });
});
