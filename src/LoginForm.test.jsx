import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  function renderLoginForm() {
    return render(
      <LoginForm
        onChange={handleChange}
        onSubmit={handleSubmit}
      />,
    );
  }

  it('renders input controls', () => {
    const { container } = renderLoginForm();

    expect(container).toHaveTextContent('E-mail');
    expect(container).toHaveTextContent('Password');
  });

  it('changes input value', () => {
    const { getByLabelText } = renderLoginForm();

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: 'tester@example.com' },
    });

    expect(handleChange).toBeCalledWith({
      name: 'email',
      value: 'tester@example.com',
    });
  });

  it('renders login button', () => {
    const { getByText } = renderLoginForm();

    fireEvent.click(getByText('Log in'));

    expect(handleSubmit).toBeCalled();
  });
});
