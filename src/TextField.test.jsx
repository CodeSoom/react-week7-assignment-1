import React from 'react';

import { render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  it('renders review input controls', () => {
    const onChange = jest.fn();
    const { queryByLabelText } = render((
      <TextField
        label="평점"
        type="number"
        name="score"
        onChange={onChange}
      />
    ));

    expect(queryByLabelText('평점')).not.toBeNull();
  });
});
