import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handeChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const email = '';
  const password = '';

  const renderLoginForm = () => render((
    <LoginForm
      fields={{ email, password }}
      onChange={handeChange}
      onSubmit={handleSubmit}
    />
  ));

  it('renders "e-mail" input controls and listens change event', () => {
    const { getByLabelText } = renderLoginForm();

    expect(getByLabelText('E-mail')).not.toBeNull();

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: 'test@test.com' },
    });

    expect(handeChange).toBeCalledWith({
      name: 'email',
      value: 'test@test.com',
    });
  });

  it('renders "password" input controls listens change event', () => {
    const { getByLabelText } = renderLoginForm();

    expect(getByLabelText('Password')).not.toBeNull();

    fireEvent.change(getByLabelText('Password'), {
      target: { value: '1234567*' },
    });

    expect(handeChange).toBeCalledWith({
      name: 'password',
      value: '1234567*',
    });
  });

  it('renders login button and listens click event', () => {
    const { getByText } = renderLoginForm();

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
