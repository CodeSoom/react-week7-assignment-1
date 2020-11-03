import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    handleSubmit.mockClear();
    handleChange.mockClear();
  });

  const renderLoginForm = () => render(
    <LoginForm
      onChange={handleChange}
      onSubmit={handleSubmit}
    />,
  );

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginForm();

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('password')).not.toBeNull();
  });

  context('with "Log In" button is clicked', () => {
    it('called handleSubmit', () => {
      const { getByText } = renderLoginForm();

      fireEvent.click(getByText('Log In'));

      expect(handleSubmit).toBeCalled();
    });
  });

  context('when E-mail is changed', () => {
    it('called handleChange', () => {
      const { getByLabelText } = renderLoginForm();

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: 'tester@example.com' },
      });

      expect(handleChange).toBeCalledWith({
        name: 'email',
        value: 'tester@example.com',
      });
    });
  });
});
