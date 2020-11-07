import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });
  
  function renderTextField(type) {
    return render(
      <TextField 
        label="E-mail"
        name="email"
        value="test@test"
        type={type}
        onChange={handleChange}
      />
    )
  }

  it('render label', () => {
    const { getByLabelText } = renderTextField();

    expect(getByLabelText('E-mail')).not.toBeNull();
  })

  it('listens change events', () => {
    const { getByLabelText } = renderTextField();

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: 'test@test.com' },
    });

    expect(handleChange).toBeCalled();
  });
})