import React from 'react';

import { render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  it('redners ReviewForm', () => {
    const { container } = render((
      <ReviewForm />
    ));

    expect(container).toHaveTextContent('점수');
    expect(container).toHaveTextContent('내용');
  });
});
