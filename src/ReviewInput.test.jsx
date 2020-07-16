import React from 'react';

import { render } from '@testing-library/react';

import ReviewInput from './ReviewInput';

describe('ReviewInput', () => {
  it('renders label', () => {
    const { container } = render(
      <ReviewInput
        label="평점"
        name="score"
        onChange={jest.fn()}
        value="5"
      />,
    );

    expect(container).toHaveTextContent('평점');
  });
});
