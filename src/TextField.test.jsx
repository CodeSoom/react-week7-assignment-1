import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const renderTextField = ({ label, value }) => render(
    <TextField
      label={label}
      value={value}
    />,
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders label', () => {
    const { queryByLabelText } = renderTextField({
      label: 'E-mail',
    });

    expect(queryByLabelText('E-mail')).not.toBeNull();
  });

  it('show value', () => {
    const label = 'E-mail';

    const { getByLabelText } = renderTextField({
      label,
      value: 'tester@example.com',
    });

    expect(getByLabelText(label)).toHaveValue('tester@example.com');
  });

it('listen change events', () => {
    const label = 'E-mail';
    const name = 'email';
    const value = 'tester@example.com';

    const { getByLabelText } = renderTextField();

    fireEvent.change(getByLabelText(label), {
      target: { value },
    });

    expect(handleChange).toBeCalledWith({ name, value });
  });
});
