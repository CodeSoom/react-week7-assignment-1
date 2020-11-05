import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import InputField from './InputField';

describe('<InputField />', () => {
  const handleChange = jest.fn();

  it('renders input fields', () => {
    // Given
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

    inputs.forEach(({ id, label, name }) => {
      // When
      const { getByLabelText } = render((
        <InputField
          id={id}
          label={label}
          name={name}
        />
      ));

      // Then
      expect(getByLabelText(label)).toBeInTheDocument();
    });
  });

  it('calls onChange', () => {
    const { getByRole } = render((
      <InputField
        id="test"
        label="test"
        name="test"
        type="text"
        onChange={handleChange}
      />
    ));

    fireEvent.change(getByRole('textbox'), {
      target: { value: '인풋 작성' },
    });

    expect(handleChange).toBeCalled();
  });
});
