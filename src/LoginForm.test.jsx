import { fireEvent, render } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn((event) => event.preventDefault());
  const handleChange = jest.fn();

  const renderLoginForm = ({ email = '', password = '' } = {}) => render((
    <LoginForm
      email={email}
      password={password}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />));

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  it('renders email and password', () => {
    const { container, getByLabelText } = renderLoginForm({ email: 'email', password: 'password' });

    expect(container).not.toBeNull();
    expect(getByLabelText('E-mail')).toHaveValue('email');
    expect(getByLabelText('Password')).toHaveValue('password');
  });

  it('when input changes, handleChange called', () => {
    const { getByLabelText } = renderLoginForm();

    fireEvent.change(getByLabelText('E-mail'), { target: { value: 'email' } });
    expect(handleChange).toBeCalled();
  });

  it('when form submit, handleSubmit called', () => {
    const { getByRole } = renderLoginForm();

    fireEvent.click(getByRole('button', { name: 'Log in' }));

    expect(handleSubmit).toBeCalled();
  });
});
