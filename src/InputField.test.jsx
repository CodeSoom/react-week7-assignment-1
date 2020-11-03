import React from 'react';

import { render } from '@testing-library/react';

import InputField from './InputField';

describe('<InputField />', () => {
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
});
