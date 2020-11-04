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
    }));
  });

  const renderLoginPage = () => render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>,
  );

  it('renders input field', () => {
    const { container, getByLabelText } = renderLoginPage();

    expect(container).toHaveTextContent('Log In');
    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
