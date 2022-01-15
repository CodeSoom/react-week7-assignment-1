import { fireEvent, render } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders review input fields', () => {
    const { getByText } = render(<ReviewForm />);

    expect(getByText('평점')).not.toBeNull();
    expect(getByText('리뷰 내용')).not.toBeNull();
  });

  it('renders a button to handle onSubmit', () => {
    const { getByRole } = render(<ReviewForm />);

    expect(getByRole('button', { name: '리뷰 남기기' })).not.toBeNull();

    fireEvent.click(getByRole('button', { name: '리뷰 남기기' }));

    expect(dispatch).toBeCalled();
  });
});
