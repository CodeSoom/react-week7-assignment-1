import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders input controls and change events', () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render((
      <LoginForm onChange={handleChange} />
    ));

    expect(getByLabelText('email')).not.toBeNull();
    expect(getByLabelText('password')).not.toBeNull();

    fireEvent.change(getByLabelText('email'), {
      target: { value: 'tester@example.com' },
    });

    expect(handleChange).toBeCalled();
  });

  it('renders login button', () => {
    const handleSubmit = jest.fn();

    const { getByText } = render((
      <LoginForm onSubmit={handleSubmit} />
    ));

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
