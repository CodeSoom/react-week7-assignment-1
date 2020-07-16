import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import InputField from './InputField';

describe('InputField', () => {
  const label = 'E-mail';
  const name = 'email';
  const type = 'email';
  const value = '';
  const handleChange = jest.fn();

  function renderInputField() {
    return render((
      <InputField
        label={label}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    ));
  }

  it('renders the inputField', () => {
    const { getByLabelText } = renderInputField();

    expect(getByLabelText(label)).not.toBeNull();
  });

  it('listens field change event', () => {
    const { getByLabelText } = renderInputField();
    const changeValue = 'tester@example.com';

    fireEvent.change(getByLabelText(label), {
      target: { value: changeValue },
    });
    expect(handleChange).toBeCalledWith({
      name,
      value: changeValue,
    });
  });
});
