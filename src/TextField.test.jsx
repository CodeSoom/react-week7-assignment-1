import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  const inputTextField = {
    label: '평점', type: 'number', name: 'score', value: '',
  };

  const { label, type, name } = inputTextField;

  function renderTextField(value = '') {
    return render(
      <TextField
        label={label}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders label and input control', () => {
    const { getByLabelText } = renderTextField();

    expect(getByLabelText(label)).not.toBeNull();
  });

  context('with input change event', () => {
    it('calls handleChange', () => {
      const score = '5';

      const { getByLabelText } = renderTextField();

      fireEvent.change(getByLabelText(label), {
        target: { value: score },
      });

      expect(handleChange).toBeCalled();
    });
  });
});
