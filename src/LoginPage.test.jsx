import React from 'react';

import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

jest.mock('react-redux');
describe('LoginPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'tester@example.com',
        password: 'test',
      },
    }));
  });

  const renderLoginPage = () => render(<LoginPage />);

  it('renders input controls', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('Log In');
    expect(container).toHaveTextContent('Password');
    expect(container).toHaveTextContent('E-mail');
  });
});
