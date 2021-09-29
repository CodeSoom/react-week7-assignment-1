import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  function renderLoginForm({ email, password }) {
    return render((
      <LoginForm
        fields={{ email, password }}
        onChange={handleChange}
        onClick={handleSubmit}
      />
    ));
  }

  it('renders input controls', () => {
    const email = 'test@test';
    const password = '1234';

    const { getByLabelText } = renderLoginForm({ email, password });

    const controls = [
      { label: 'e-mail', value: email },
      { label: 'password', value: password },
    ];

    controls.forEach(({ label, value }) => {
      const input = getByLabelText(label);

      expect(input.value).toBe(value);
    });
  });

  it('listens change events', () => {
    const { getByLabelText } = renderLoginForm({});

    const controls = [
      { label: 'e-mail', name: 'email', value: 'tester@example.com' },
      { label: 'password', name: 'password', value: 'test' },
    ];

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders "log in" button', () => {
    const { getByText } = renderLoginForm({});

    fireEvent.click(getByText('Log in'));

    expect(handleSubmit).toBeCalled();
  });
});
