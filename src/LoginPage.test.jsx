import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import LoginPage from './LoginPage';

jest.mock('react-redux');

test('LoginPage', () => {
  useSelector.mockImplementation((selector) => selector({
    loginFields: {
      email: '',
      password: '',
    },
    accessToken: '',
  }));

  const { container, getByLabelText } = render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>,
  );

  expect(container).toHaveTextContent('Log In');

  expect(getByLabelText('E-mail')).not.toBeNull();
  expect(getByLabelText('Password')).not.toBeNull();
});
