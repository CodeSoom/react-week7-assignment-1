import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  const loginFields = {
    email: '',
    password: '',
  };

  const renderLoginForm = (accessToken = '') => render(

    <LoginForm
      accessToken={accessToken}
      loginFields={loginFields}
      onSubmit={handleSubmit}
      onChange={handleChange}

    />,
  );

  context('without Log In', () => {
    it('renders input fields and Log In button', () => {
      const { getByLabelText, getByText } = renderLoginForm();

      expect(getByLabelText('E-mail')).not.toBeNull();
      expect(getByLabelText('Password')).not.toBeNull();
      expect(getByText('Log In')).not.toBeNull();
    });

    it('when Log In button click', () => {
      const { getByText } = renderLoginForm();

      fireEvent.click(getByText('Log In'));

      expect(handleSubmit).toBeCalled();
    });

    it('when change input fields', () => {
      const { getByLabelText } = renderLoginForm();

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: 'tester@example.com' },
      });

      expect(handleChange).toBeCalledWith({
        name: 'email',
        value: 'tester@example.com',
      });

      fireEvent.change(getByLabelText('Password'), {
        target: { value: '1234' },
      });

      expect(handleChange).toBeCalledWith({
        name: 'password',
        value: '1234',
      });

      expect(handleChange).toBeCalledTimes(2);
    });
  });

  context('with Log In', () => {
    it('renders "Log out" button', () => {
      const accessToken = 'ACCESS_TOKEN';
      const { container } = renderLoginForm(accessToken);

      expect(container).toHaveTextContent('Log out');
    });
  });
});
