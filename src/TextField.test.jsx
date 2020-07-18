import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const control = {
    label: '평점', name: 'score', type: 'number', value: '5',
  };
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  function renderInputControl() {
    return render(
      <TextField
        label={control.label}
        name={control.name}
        type={control.type}
        value={control.value}
        onChange={handleChange}
      />,
    );
  }

  it('renders input controls', () => {
    const { getByLabelText } = renderInputControl();

    expect(getByLabelText(control.label).value).toBe('5');
  });

  it('changes input controls', () => {
    const { getByLabelText } = renderInputControl();

    fireEvent.change(getByLabelText(control.label), { target: { value: '0' } });

    expect(handleChange).toBeCalledWith({ name: control.name, value: '0' });
  });
});
