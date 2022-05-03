import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders input controls ', () => {
    const { getByLabelText } = render((
      <LoginForm />
    ));

    expect(getByLabelText('email')).not.toBeNull();
    expect(getByLabelText('password')).not.toBeNull();
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
