import { render } from '@testing-library/react';

import Login from './Login';

test('Login', () => {
  const { container } = render((
    <Login />
  ));

  expect(container).toHaveTextContent('Login');
});

describe('LoginForm', () => {
  it('renders input controls', () => {
    const { getByLabelText, getByRole } = render((
      <Login />
    ));

    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();

    expect(getByRole('button')).toBeInTheDocument();
  });
});
