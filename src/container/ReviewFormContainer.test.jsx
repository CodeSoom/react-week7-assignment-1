import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';
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
  });

  it('renders review fields', () => {
    const { container } = renderReviewFormContainer();

    expect(container).toHaveTextContent('평점');
    expect(container).toHaveTextContent('리뷰 내용');
    expect(container).toHaveTextContent('리뷰 남기기');
  });

  //   describe('change review fields', () => {
  //     it('call review field change action', () => {

//     });
//   });
});
