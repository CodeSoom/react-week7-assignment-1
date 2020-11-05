import React from 'react';

import { render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  it('renders review write form', () => {
    const { queryByText } = render(<ReviewForm />);

    expect(queryByText('평점')).not.toBeNull();
    expect(queryByText('리뷰 내용')).not.toBeNull();
  });
});
