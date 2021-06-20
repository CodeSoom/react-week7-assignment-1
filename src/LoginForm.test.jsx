import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    handleSubmit.mockClear();
    handleChange.mockClear();
  });

  const email = '';
  const password = '';

  function renderLoginForm() {
    return render(
      <LoginForm
        email={email}
        password={password}
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

  it('renders login button', () => {
    const { queryByText } = renderLoginForm({});

    expect(queryByText('Log In')).not.toBeNull();
  });

  it('listens change events', () => {
    const { getByLabelText } = renderLoginForm();

    const controls = [
      { label: 'E-mail', name: 'email', value: 'tester@example.com' },
      { label: 'Password', name: 'password', value: 'test' },
    ];

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);

      expect(input).not.toBeNull();

      fireEvent.change(input, {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('listens click event', () => {
    const { getByText } = renderLoginForm({});

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
