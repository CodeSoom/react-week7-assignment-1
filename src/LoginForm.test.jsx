import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();

  it('renders input controls', () => {
    const { container } = render((
      <LoginForm
        onSubmit={handleSubmit}
      />
    ));

    expect(container).toHaveTextContent('E-mail');
    expect(container).toHaveTextContent('Password');
  });

  it('renders login button', () => {
    const { getByText } = render((
      <LoginForm
        onSubmit={handleSubmit}
      />
    ));

    fireEvent.click(getByText('Log in'));

    expect(handleSubmit).toBeCalled();
  });
});
