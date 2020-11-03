import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleClick = jest.fn();

  const renderLoginForm = () => render(
    <LoginForm onClick={handleClick} />,
  );

  beforeEach(() => {
    handleClick.mockClear();
  });

  it('renders input-controls', () => {
    const { queryByLabelText } = renderLoginForm();

    expect(queryByLabelText('E-mail')).not.toBeNull();
    expect(queryByLabelText('Password')).not.toBeNull();
  });

  it('renders "Log In" button', () => {
    const { queryByText } = renderLoginForm();

    expect(queryByText('Log In')).not.toBeNull();
  });

  it('listens click event on "Log In" button', () => {
    const { getByText } = renderLoginForm();

    expect(handleClick).not.toBeCalled();

    fireEvent.click(getByText('Log In'));

    expect(handleClick).toBeCalledTimes(1);
  });
});
