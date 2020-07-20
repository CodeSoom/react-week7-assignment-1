import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

import loginFields from '../fixtures/loginFields';

jest.mock('react-redux');

function renderLoginPage() {
  return render(
    <LoginPage />,
  );
}

describe('LoginPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      loginFields,
    }));
  });

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginPage();

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('renders submit button', () => {
    const { getByText } = renderLoginPage();

    expect(getByText('Log In')).not.toBeNull();
  });
});
