import React from 'react';

import { render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  function renderTextField() {
    return render(
      <TextField
        label="E-mail"
      />,
    );
  }

  it('renders text field', () => {
    const { getByLabelText } = renderTextField();

    expect(getByLabelText('E-mail'));
  });
});
