import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  const renderLoginForm = ({ email, password }) => render((
    <LoginForm
      fields={{ email, password }}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  ));

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginForm({ });

    const controls = [
      { label: 'E-mail' },
      { label: 'Password' },
    ];

    controls.forEach(({ label }) => {
      expect(getByLabelText(label)).not.toBeNull();
    });
  });

  it('listens change event', () => {
    const { getByLabelText } = renderLoginForm({ });

    const controls = [
      { label: 'E-mail', name: 'email', value: 'tester@example.com' },
      { label: 'Password', name: 'password', value: 'test' },
    ];

    controls.forEach(({ label, value, name }) => {
      const input = getByLabelText(label);

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders "Log In" button', () => {
    const { getByText } = renderLoginForm({ });

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
