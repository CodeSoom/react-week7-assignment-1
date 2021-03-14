import React from 'react';

import { render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  it('renders review write form', () => {
    const { queryByLabelText } = render(<ReviewForm />);

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰 내용')).not.toBeNull();
  });
});
