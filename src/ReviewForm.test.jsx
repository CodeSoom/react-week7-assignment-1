import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  it('renders review input form and submit button', () => {
    const { getByLabelText, getByText } = render(<ReviewForm />);

    expect(getByLabelText('평점')).toBeInTheDocument();
    expect(getByLabelText('리뷰 내용')).toBeInTheDocument();

    expect(getByText('리뷰 남기기')).toBeInTheDocument();
  });

  it('listens change events', () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render((
      <ReviewForm
        onChange={handleChange}
      />
    ));

    fireEvent.change(getByLabelText('평점'), {
      target: { value: '5' },
    });

    expect(handleChange).toBeCalledWith({ name: 'score', value: '5' });
  });
});
