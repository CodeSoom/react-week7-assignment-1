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

  const renderLoginPage = () => render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>,
  );

  it('renders title', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('Login');
  });

  it('renders input controls', () => {
    const { queryByText } = renderLoginPage();

    expect(queryByText('email')).not.toBeNull();
    expect(queryByText('password')).not.toBeNull();
  });
});
