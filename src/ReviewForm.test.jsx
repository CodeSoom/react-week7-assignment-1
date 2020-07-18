import React from 'react';

import { render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  it('renders review input form and submit button', () => {
    const { getByLabelText, getByText } = render(<ReviewForm />);

    expect(getByLabelText('평점')).toBeInTheDocument();
    expect(getByLabelText('리뷰 내용')).toBeInTheDocument();

    expect(getByText('리뷰 남기기')).toBeInTheDocument();
  });
});
