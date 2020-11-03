import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  it('renders input-controls', () => {
    const { queryByLabelText } = render(
      <LoginForm />,
    );

    expect(queryByLabelText('E-mail')).not.toBeNull();
    expect(queryByLabelText('Password')).not.toBeNull();
  });

  it('renders "Log In" button', () => {
    const { queryByText } = render(
      <LoginForm />,
    );

    expect(queryByText('Log In')).not.toBeNull();
  });

  it('listens click event on "Log In" button', () => {
    const { getByText } = render(
      <LoginForm onClick={handleClick} />,
    );

    expect(handleClick).not.toBeCalled();

    fireEvent.click(getByText('Log In'));

    expect(handleClick).toBeCalledTimes(1);
  });
});
