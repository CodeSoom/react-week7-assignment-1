import React from 'react';

import { render, fireEvent } from '@testing-library/react';

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

  it('listens input change events', () => {
    const { getAllByRole } = renderLoginForm();

    const inputs = getAllByRole('textbox');

    inputs.forEach((input) => {
      fireEvent.change(input, {
        target: {
          name: 'name',
          value: 'value',
        },
      });

      expect(handleChange).toBeCalledWith({
        name: 'name',
        value: 'value',
      });
    });
  });
});
