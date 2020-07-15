import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import LoginPage from './LoginPage';

jest.mock('react-redux');

describe('LoginPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test.com',
        password: 'password1',
      },
    }));
  });

  function renderLoginPage() {
    return render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );
  }

  it('renders title', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('Log In');
  });
});
