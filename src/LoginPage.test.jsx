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
        email: '',
        password: '',
      },
    }));
  });

  function renderLoginPage() {
    return render((
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    ));
  }

  it('renders title', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('Log In');
  });

  it('render input controls', () => {
    const { getByLabelText } = renderLoginPage();

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
