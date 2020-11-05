import React from 'react';

import { render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  it('renders label and input control', () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render(
      <TextField
        label="평점"
        name="score"
        onChange={handleChange}
      />,
    );

    expect(getByLabelText('평점')).not.toBeNull();
  });
});
