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

  function renderLoginForm(email, password, onSubmit, onChange) {
    return render(
      <LoginForm
        email={email}
        password={password}
        onSubmit={onSubmit}
        onChange={onChange}
      />,
    );
  }

  it('renders email and password input', () => {
    const inputElements = [
      { label: 'E-mail', name: 'email', values: { before: 'before@test.com', after: 'after@test.com' } },
      { label: 'Password', name: 'password', values: { before: 'beforePassword1', after: 'afterPassword1' } },
    ];

    const { getByLabelText } = renderLoginForm(
      inputElements[0].values.before,
      inputElements[1].values.before,
      handleSubmit,
      handleChange,
    );

    inputElements.forEach(({ label, name, values: { before, after } }) => {
      const inputElement = getByLabelText(label);
      expect(inputElement.value).toBe(before);

      fireEvent.change(inputElement, { target: { value: after } });
      expect(handleChange).toBeCalledWith({ name, value: after });
    });
  });

  it('renders login button', () => {
    const { getByText } = renderLoginForm('', '', handleSubmit, handleChange);

    fireEvent.submit(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
