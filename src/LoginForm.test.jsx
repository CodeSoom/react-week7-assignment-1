import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleClick = jest.fn();

  const renderHomePage = () => render(<LoginForm onSubmit={handleClick} />);

  it('render user name and password ', () => {
    const { getByLabelText } = renderHomePage();

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('change user name and password ', () => {
    const { getByLabelText } = renderHomePage();

    expect(getByLabelText('E-mail')).not.toBeNull();

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: 'tester@example.com' },
    });

    expect(getByLabelText('Password')).not.toBeNull();

    fireEvent.change(getByLabelText('Password'), {
      target: { value: 'test' },
    });
  });

  it('click login button', () => {
    const { getByText } = renderHomePage();

    const loginButton = getByText('Login');
    expect(loginButton).not.toBeNull();

    fireEvent.click(loginButton);

    expect(handleClick).toBeCalledTimes(1);
  });
});
