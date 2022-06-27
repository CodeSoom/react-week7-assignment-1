import { render } from '@testing-library/react';

import LoginForm from './LoginForm';

test('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  const { getByLabelText } = render((
    <LoginForm
      email="tester@example.com"
      password="test"
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  ));

  expect(getByLabelText('Email')).toBeInTheDocument();
  expect(getByLabelText('Password')).toBeInTheDocument();
});
