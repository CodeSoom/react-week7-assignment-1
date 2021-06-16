import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    handleSubmit.mockClear();
    handleChange.mockClear();
  });

  const { email, password } = {
    email: '',
    password: '',
  };

  function renderLoginForm() {
    return render(
      <LoginForm
        fields={{ email, password }}
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

    expect(queryByText('Log in')).not.toBeNull();
  });

  it('listens change event', () => {
    const { name, value } = {
      name: 'email',
      value: 'tester@example.com',
    };

    const { getByLabelText } = renderLoginForm({ name, value });

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: 'tester@example.com' },
    });

    expect(handleChange).toBeCalledWith({
      name: 'email',
      value: 'tester@example.com',
    });
  });

  it('listens click event', () => {
    const { getByText } = renderLoginForm({});

    fireEvent.click(getByText('Log in'));

    expect(handleSubmit).toBeCalled();
  });
});
