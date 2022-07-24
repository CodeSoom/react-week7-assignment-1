import { fireEvent, render } from '@testing-library/react';

import { email, password } from '../fixtures/loginForm';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderLoginForm = () => render(
    <LoginForm
      fields={{ email, password }}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />,
  );

  it('E-mail - input이 렌더링된다', () => {
    const { getByLabelText } = renderLoginForm();

    expect(getByLabelText('E-mail')).toBeInTheDocument();
  });

  it('Password - input이 렌더링된다', () => {
    const { getByLabelText } = renderLoginForm();

    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it('login - button이 렌더링된다', () => {
    const { getByText } = renderLoginForm();

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });

  it('change 이벤트를 listen 한다', () => {
    const { getByLabelText } = renderLoginForm();

    const controls = [
      { label: 'E-mail', name: 'email', value: email },
      { label: 'Password', name: 'password', value: password },
    ];

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);

      fireEvent.change(input, {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({
        name,
        value,
      });
    });
  });

  it('click 이벤트를 listen 한다', () => {
    const { getByText } = renderLoginForm();

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
