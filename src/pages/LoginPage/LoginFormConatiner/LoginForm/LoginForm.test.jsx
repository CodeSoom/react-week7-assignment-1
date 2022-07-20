import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  const loginFields = {
    email: 'abc@',
    password: 'passwo',
  };

  const renderLoginForm = () => render((
    <LoginForm
      loginFields={loginFields}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders inputs', () => {
    const { getByLabelText } = renderLoginForm();

    const labels = ['E-mail', 'Password'];

    labels.forEach((label) => {
      expect(getByLabelText(label)).toBeInTheDocument();
    });
  });

  it('renders login fields', () => {
    const { getByLabelText } = renderLoginForm();

    const inputs = [
      { label: 'E-mail', name: 'email' },
      { label: 'Password', name: 'password' },
    ];

    inputs.forEach(({ label, name }) => {
      expect(getByLabelText(label)).toHaveValue(loginFields[name]);
    });
  });

  it('listens change events', () => {
    const { getByLabelText } = renderLoginForm();

    const inputs = [
      { label: 'E-mail', name: 'email', value: 'abc@test.com' },
      { label: 'Password', name: 'password', value: 'password123' },
    ];

    inputs.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders login button', () => {
    const { getByRole } = renderLoginForm();

    expect(getByRole('button', { name: 'Log In' })).toBeInTheDocument();
  });

  it('listens submit event', () => {
    const { getByRole } = renderLoginForm();

    fireEvent.click(getByRole('button', { name: 'Log In' }));

    expect(handleSubmit).toBeCalled();
  });
});
