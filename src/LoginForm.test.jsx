import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  function renderLoginForm({ email, password } = {}) {
    return render((
      <LoginForm
        email={email}
        password={password}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    ));
  }

  it('renders input controllers and submit button', () => {
    const email = 'test@naver.com';
    const password = 'test';

    const { getByLabelText, getByRole } = renderLoginForm({ email, password });

    const controls = [
      { label: 'E-mail', value: email },
      { label: 'Password', value: password },
    ];

    controls.forEach(({ label, value }) => {
      expect(getByLabelText(label).value).toBe(value);
    });

    expect(getByRole('button', { name: 'Log In' })).toBeInTheDocument();
  });

  it('listens change event', () => {
    const { getByLabelText } = renderLoginForm();

    const controls = [
      { label: 'E-mail', value: 'test@test.com', name: 'email' },
      { label: 'Password', value: 'test', name: 'password' },
    ];

    controls.forEach(({ label, value, name }) => {
      fireEvent.change(getByLabelText(label), {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('listens click event', () => {
    const { getByRole } = renderLoginForm();

    fireEvent.click(getByRole('button', { name: 'Log In' }));

    expect(handleSubmit).toBeCalled();
  });
});
