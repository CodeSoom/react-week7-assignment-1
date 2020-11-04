import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const field = {
    name: 'email',
    text: 'tester@example.com',
    label: 'E-mail',
  };

  const handleChange = jest.fn();

  const renderTextField = () => render(
    <TextField
      name={field.name}
      label={field.label}
      text={field.text}
      onChange={handleChange}
    />,
  );

  beforeEach(() => {
    handleChange.mockClear();
  });

  it('renders filed label', () => {
    const { queryByLabelText } = renderTextField();

    expect(queryByLabelText(field.label)).not.toBeNull();
  });

  it('shows field text', () => {
    const { getByLabelText } = renderTextField();

    expect(getByLabelText(field.label)).toHaveValue(field.text);
  });

  it('listens change event', () => {
    const { getByLabelText } = renderTextField();

    fireEvent.change(getByLabelText(field.label), {
      target: { value: 'new@example.com' },
    });

    expect(handleChange).toBeCalledWith({
      name: field.name,
      value: 'new@example.com',
    });
  });
});
