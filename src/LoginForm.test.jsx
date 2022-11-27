import { render, screen, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

import loginControls from '../fixtures/loginControls';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderLoginForm = ({ email, password } = {}) => render((
    <LoginForm
      fields={{ email, password }}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />));

  it('Login input을 랜더링한다', () => {
    const email = 'test@test';
    const password = '1234';

    renderLoginForm({ email, password });

    const controls = [
      { label: 'E-mail', value: email },
      { label: 'Password', value: password },
    ];

    controls.forEach(({ label, value }) => {
      const input = screen.getByLabelText(label);

      expect(input.value).toBe(value);
    });
  });

  it('Login input에 handleChange가 호출된다', () => {
    renderLoginForm();

    loginControls.forEach(({ label, name, value }) => {
      const input = screen.getByLabelText(label);

      fireEvent.change(input, {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });
});
