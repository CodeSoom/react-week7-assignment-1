import React from 'react';

import { render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  it('renders review input form', () => {
    const { container } = render(<ReviewForm />);

    expect(container).toHaveTextContent('평점');
  });
});
