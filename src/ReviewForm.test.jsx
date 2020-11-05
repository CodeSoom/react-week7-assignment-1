import React from 'react';

import { render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  it('renders', () => {
    const { container } = render(<ReviewForm />);

    expect(container).toHaveTextContent('평점');
    expect(container).toHaveTextContent('리뷰 내용');
    expect(container).toHaveTextContent('리뷰 남기기');
  });
});
