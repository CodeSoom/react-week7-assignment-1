import React from 'react';

import { render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  function renderTextField() {
    return render(
      <TextField
        label="E-mail"
        name="email"
        value="test@test"
      />,
    );
  }

  it('renders label and input control', () => {
    const { getByLabelText } = renderTextField();

    expect(getByLabelText('E-mail')).not.toBeNull();
  });
});
