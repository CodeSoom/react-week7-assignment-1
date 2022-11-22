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

  it('로그인 input이 랜더링된다', () => {
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

  it('input에 입력한 값이 잘 들어온다', () => {
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
