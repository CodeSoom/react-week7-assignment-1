import React from 'react';

import { render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders LoginForm', () => {
    const loginFields = {
      email: '',
      password: '',
    };
    const handleChangeLoginField = jest.fn();
    const handleSubmitLoginField = jest.fn();

    const { getByLabelText, getByRole } = render(<LoginForm
      loginFields={loginFields}
      ChangeLoginField={handleChangeLoginField}
      SubmitLoginField={handleSubmitLoginField}
    />);

    expect(getByLabelText('E-mail')).toHaveAttribute('type', 'email');
    expect(getByLabelText('Password')).toHaveAttribute('type', 'password');

    expect(getByRole('button', { name: 'LogIn' })).toBeInTheDocument();
  });
});
