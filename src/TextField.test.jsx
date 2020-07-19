import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  it('renders label and input control', () => {
    const handleChange = jest.fn();

    const { container, queryByLabelText } = render((
      <TextField
        label="평점"
        type="number"
        name="score"
        onChange={handleChange}
      />
    ));

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(container).toContainHTML('type="number"');
  });
});
