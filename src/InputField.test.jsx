import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import InputField from './InputField';

describe('TextField', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  it('renders label and input control', () => {
    const { queryByLabelText } = render((
      <InputField
        label="Email"
        type="email"
        name="email"
        value=""
        onChange={handleChange}
      />
    ));

    expect(queryByLabelText('Email')).not.toBeNull();
  });

  it('listens to input change events', () => {
    const name = 'email';
    const value = 'test@test.com';

    const { getByLabelText } = render((
      <InputField
        label="Email"
        type="email"
        name={name}
        value=""
        onChange={handleChange}
      />
    ));

    fireEvent.change(getByLabelText('Email'), {
      target: { name, value },
    });

    expect(handleChange).toBeCalledWith({ name, value });
  });
});
