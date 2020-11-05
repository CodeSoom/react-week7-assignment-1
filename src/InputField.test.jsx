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
  }) => render((
    <InputField
      id={id}
      label={label}
      type={type}
      name={name}
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
      },
      {
        id: 'password',
        label: 'Password',
        type: 'password',
        name: 'password',
      },
    ];

    inputs.forEach((input) => {
      const { getByLabelText } = renderInputField(input);

      expect(getByLabelText(input.label)).toBeInTheDocument();
    });
  });

  it('calls onChange', () => {
    const { getByRole } = renderInputField({
      id: 'email',
      label: 'Email',
      type: 'email',
      name: 'email',
    });

    fireEvent.change(getByRole('textbox'), {
      target: { value: '인풋 작성' },
    });

    expect(handleChange).toBeCalled();
  });
});
