import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();

  const renderLoginForm = () => render(
    <LoginForm onSubmit={handleSubmit} />,
  );

  it('타이틀이 보임', () => {
    const { container } = renderLoginForm();

    expect(container).toHaveTextContent('Log In');
  });

  it('input 두 개가 보임', () => {
    const { getByLabelText } = renderLoginForm();

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('버튼이 눌리면 dispatch 호출', () => {
    const { getByText } = renderLoginForm();

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
