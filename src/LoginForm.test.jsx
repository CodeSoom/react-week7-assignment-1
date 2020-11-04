import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  const renderLoginForm = (inputFields) => render(
    <LoginForm
      inputFields={inputFields}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />,
  );

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
    const inputFields = {
      email: 'test',
      password: '',
    };
    const { getByDisplayValue } = renderLoginForm(inputFields);

    fireEvent.change(getByDisplayValue('test'), {
      target: { value: 'tester@example.com' },
    });

    expect(handleChange).toBeCalled();
    expect(handleChange).toBeCalledWith({
      name: 'email',
      value: 'tester@example.com',
    });
  });
});
