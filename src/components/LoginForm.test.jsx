import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const onChange = jest.fn();
  const onSubmit = jest.fn();

  const rendersLoginForm = () => render((
    <LoginForm
      onChange={onChange}
      onSubmit={onSubmit}
    />));

  it('renders "Log in" button', () => {
    const { getByRole } = rendersLoginForm();

    expect(getByRole('button', { name: 'Log In' })).not.toBeNull();
  });

  it(' "Log in" button calls onSubmit', () => {
    const { getByRole } = rendersLoginForm();

    fireEvent.click(getByRole('button', { name: 'Log In' }));
    expect(onSubmit).toBeCalled();
  });

  it('email input calls onChage', () => {
    given('email', () => 'tester@example.com');
    const { getByLabelText } = rendersLoginForm();

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: given.email },
    });

    expect(onChange).toBeCalled();
  });

  it('password input calls onChage', () => {
    given('password', () => 'test');

    const { getByLabelText } = rendersLoginForm();

    fireEvent.change(getByLabelText('Password'), {
      target: { value: given.password },
    });

    expect(onChange).toBeCalled();
  });
});