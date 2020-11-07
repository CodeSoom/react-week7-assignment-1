import React from 'react';

import { render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();

  it('renders Log In title', () => {
    const email = 'test@test';

    const password = '1234';

    const { container } = render(
      <LoginForm
        fields={{ email, password }}
      />,
    );

    expect(container).toHaveTextContent('Log In');
  });

  it('renders input controls', () => {
    const email = 'test@test';

    const password = '1234';
    const { getByLabelText } = render(
      <LoginForm
        onChange={handleChange}
        fields={{ email, password }}
      />,
    );

    expect(getByLabelText('E-mail').value).toBe(email);

    expect(getByLabelText('Password').value).toBe(password);
  });
});
