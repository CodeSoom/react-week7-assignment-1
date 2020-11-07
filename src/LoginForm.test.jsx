import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  it('renders Log In title', () => {
    const email = 'test@test';

    const password = '1234';

    const { getByText } = render(
      <LoginForm
        fields={{ email, password }}
        onSubmit={handleSubmit}
      />,
    );

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });

  it('renders input controls', () => {
    const email = 'test@test';

    const password = '1234';

    const { getByLabelText } = render(
      <LoginForm
        onChange={handleChange}
        fields={{ email, password }}
      />,
    );

    expect(getByLabelText('E-mail').value).toBe(email);

    expect(getByLabelText('Password').value).toBe(password);
  });

  it('listens change events', () => {
    const email = 'test@test';

    const password = '1234';
    const { getByLabelText } = render(
      <LoginForm
        onChange={handleChange}
        fields={{ email, password }}
      />,
    );

    fireEvent.change(getByLabelText('E-mail'), { target: { value: email } });

    expect(handleChange).toBeCalledWith({ name: 'email', value: 'test@test' });

    fireEvent.change(getByLabelText('Password'), { target: { value: password } });

    expect(handleChange).toBeCalledWith({ name: 'password', value: '1234' });
  });
});
