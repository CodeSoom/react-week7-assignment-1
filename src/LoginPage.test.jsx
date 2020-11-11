import React from 'react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

jest.mock('react-redux');

describe('LoginPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'tester',
        password: '',
      },
      accessToken: given.accessToken,
    }));
  });

  const renderLoginPage = () => render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>,
  );

  context('without Log In', () => {
    given('accessToken', () => null);
    it('renders input field', () => {
      const { container, getByLabelText } = renderLoginPage();

      expect(container).toHaveTextContent('Log In');
      expect(getByLabelText('E-mail')).not.toBeNull();
      expect(getByLabelText('Password')).not.toBeNull();
    });
  });

  context('with Log In', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders logout button', () => {
      const { container } = renderLoginPage();

      expect(container).toHaveTextContent('Log out');
    });
  });
});
