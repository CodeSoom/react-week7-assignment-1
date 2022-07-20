import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderLoginForm = () => render(
    <LoginForm onSubmit={handleSubmit} />,
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
});
