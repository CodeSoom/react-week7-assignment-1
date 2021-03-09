import React from 'react';

import { render } from '@testing-library/react';

import ReviewForm from '@components/ReviewForm';

describe('ReviewForm', () => {
  it('renders input fields and button', () => {
    const { getByLabelText, getByRole } = render(<ReviewForm />);

    expect(getByLabelText('평점')).toBeInTheDocument();
    expect(getByLabelText('리뷰')).toBeInTheDocument();

    expect(getByRole('button', { name: '리뷰 남기기' })).toBeInTheDocument();
  });
});
