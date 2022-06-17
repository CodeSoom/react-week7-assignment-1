import { render } from '@testing-library/react';

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
  it('renders input controls', () => {
    const { getByLabelText, getByRole } = render((
      <ReviewFormContainer />
    ));

    expect(getByLabelText('평점')).toBeInTheDocument();
    expect(getByLabelText('리뷰 내용')).toBeInTheDocument();

    expect(getByRole('button')).toHaveTextContent('리뷰 남기기');
  });
});
