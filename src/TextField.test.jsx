import React from 'react';

import { render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  it('renders input fields', () => {
    const { container } = render((
      <TextField
        label="평점"
        name="score"
        onChange={handleChange}
      />
    ));

    expect(container).toHaveTextContent('평점');
    expect(container).toHaveTextContent('리뷰 내용');
  });
});
