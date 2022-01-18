import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  const rendersLoginForm = () => render((
    <LoginForm
      onChange={handleChange}
      onSubmit={handleSubmit}
    />));

  it('renders "Log in" button', () => {
    const { getByRole } = rendersLoginForm();

    expect(getByRole('button', { name: 'Log In' })).not.toBeNull();
  });

  it(' "Log in" button calls onSubmit', () => {
    const { getByRole } = rendersLoginForm();

    fireEvent.click(getByRole('button', { name: 'Log In' }));

    expect(handleSubmit).toBeCalled();
  });

  it('email input calls onChage', () => {
    given('email', () => 'tester@example.com');

    const { getByLabelText } = rendersLoginForm();

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: given.email },
    });

    expect(handleChange).toBeCalled();
  });

  it('password input calls onChage', () => {
    given('password', () => 'test');

    const { getByLabelText } = rendersLoginForm();

    fireEvent.change(getByLabelText('Password'), {
      target: { value: given.password },
    });

    expect(handleChange).toBeCalled();
  });
});
