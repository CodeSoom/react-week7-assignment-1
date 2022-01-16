import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders input field to handle onChange', () => {
    const { getByLabelText } = render(
      <LoginForm
        onSubmit={handleSubmit}
        onChange={handleChange}
      />,
    );

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: 'test@test.com' },
    });
    fireEvent.change(getByLabelText('Password'), {
      target: { value: '123456' },
    });

    expect(handleChange).toBeCalledTimes(2);
  });

  it('renders login button to handle onSubmit', () => {
    const { getByRole } = render(
      <LoginForm
        onSubmit={handleSubmit}
        onChange={handleChange}
      />,
    );

    expect(getByRole('button', { name: 'Log In' })).not.toBeNull();

    fireEvent.click(getByRole('button', { name: 'Log In' }));

    expect(handleSubmit).toBeCalled();
  });
});
