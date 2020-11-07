import React from 'react';

import { render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('<LoginForm />', () => {
  const handleChange = jest.fn();

  const renderLoginForm = () => render((
    <LoginForm
      email="test@email.com"
      password="test"
      onChange={handleChange}
    />
  ));

  it('renders email and password fields', () => {
    const { getByLabelText } = renderLoginForm();

    expect(getByLabelText('E-mail')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it('renders log in button', () => {
    const { getByRole } = renderLoginForm();

    expect(getByRole('button')).toHaveTextContent('Log In');
  });
});
