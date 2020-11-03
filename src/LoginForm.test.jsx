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

  describe('"Log In" button', () => {
    const loginButton = 'Log In';

    it('is rendered', () => {
      const { queryByText } = renderLoginForm();

      expect(queryByText(loginButton)).not.toBeNull();
    });

    it('listens click event', () => {
      const { getByText } = renderLoginForm();

      expect(handleClick).not.toBeCalled();

      fireEvent.click(getByText(loginButton));

      expect(handleClick).toBeCalledTimes(1);
    });
  });
});
