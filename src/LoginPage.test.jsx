import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      loginField: {
        email: 'test@test',
        password: '1234',
      },
    }));
  });

  const renderLoginPage = () => render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>,
  );

  it('renders login title', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('Log in');
  });

  it('renders login field', () => {
    const { getByLabelText } = renderLoginPage();

    expect(getByLabelText('e-mail')).not.toBeNull();
    expect(getByLabelText('password')).not.toBeNull();
  });
});
