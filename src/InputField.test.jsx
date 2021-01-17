import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import InputField from './InputField';

describe('<InputField />', () => {
  const handleChange = jest.fn();

  const renderInputField = ({
    id,
    label,
    type,
    name,
    value,
  }) => render((
    <InputField
      id={id}
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
    />
  ));

  beforeEach(() => {
    handleChange.mockClear();
  });

  it('renders input fields', () => {
    const inputs = [
      {
        id: 'email',
        label: 'Email',
        type: 'email',
        name: 'email',
        value: 'test@test.com',
      },
      {
        id: 'password',
        label: 'Password',
        type: 'password',
        name: 'password',
        value: 'test',
      },
    ];

    inputs.forEach((input) => {
      const { getByLabelText } = renderInputField(input);

      expect(getByLabelText(input.label)).toBeInTheDocument();
      expect(getByLabelText(input.label)).toHaveValue(input.value);
    });
  });

  it('calls onChange', () => {
    const { getByRole } = renderInputField({
      id: 'email',
      label: 'Email',
      type: 'email',
      name: 'email',
      value: 'test@test.com',
    });

    fireEvent.change(getByRole('textbox'), {
      target: { value: '인풋 작성' },
    });

    expect(handleChange).toBeCalled();
  });
});
