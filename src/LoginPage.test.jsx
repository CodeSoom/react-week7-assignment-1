import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import LoginPage from './LoginPage';

jest.mock('react-redux');

test('LoginPAge', () => {
  useSelector.mockImplementation((selector) => selector({
    loginFields: {
      email: '',
      password: '',
    },
    accessToken: '',
  }));

  const { container, getByLabelText } = render(<LoginPage />);

  expect(container).toHaveTextContent('Log In');

  expect(getByLabelText('E-mail')).not.toBeNull();
  expect(getByLabelText('Password')).not.toBeNull();
});
