import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  const renderLoginForm = () => render(
    <LoginForm
      onSubmit={handleSubmit}
      onChange={handleChange}
    />,
  );

  it('타이틀이 보임', () => {
    const { container } = renderLoginForm();

    expect(container).toHaveTextContent('Log In');
  });

  it('input 입력 하면 handleChange 호출', () => {
    const { getByLabelText } = renderLoginForm();

    const controls = [{ label: 'E-mail', name: 'email', value: 'test@test.com' },
      { label: 'Password', name: 'password', value: 'test' },
    ];

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('버튼이 눌리면 dispatch 호출', () => {
    const { getByText } = renderLoginForm();

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
