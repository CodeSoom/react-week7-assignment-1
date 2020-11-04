import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  const renderTextField = ({ label, text, name }) => render(
    <TextField
      name={name}
      label={label}
      text={text}
      onChange={handleChange}
    />,
  );

  beforeEach(() => {
    handleChange.mockClear();
  });

  it('renders label', () => {
    const { queryByLabelText } = renderTextField({
      label: 'E-mail',
    });

    expect(queryByLabelText('E-mail')).not.toBeNull();
  });

  it('shows text', () => {
    const label = 'E-mail';

    const { getByLabelText } = renderTextField({
      label,
      text: 'tester@example.com',
    });

    expect(getByLabelText(label)).toHaveValue('tester@example.com');
  });

  it('listens change events', () => {
    const label = 'E-mail';
    const name = 'email';
    const text = 'tester@example.com';

    const value = 'new@example.com';

    const { getByLabelText } = renderTextField({
      label,
      name,
      text,
    });

    fireEvent.change(getByLabelText(label), {
      target: { value },
    });

    expect(handleChange).toBeCalledWith({ name, value });
  });
});
