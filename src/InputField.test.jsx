import React from 'react';

import { render } from '@testing-library/react';

import InputField from './InputField';

describe('InputField', () => {
  it('renders the inputField', () => {
    const label = 'E-mail';
    const name = 'email';
    const value = 'tester@example.com';
    const handleChange = jest.fn();

    const { getByLabelText } = render((
      <InputField
        label={label}
        name={name}
        value={value}
        onChange={handleChange}
      />
    ));

    expect(getByLabelText(label)).not.toBeNull();
  });
});
