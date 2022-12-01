import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: '',
        password: '',
      },
    }));
  });

  const renderLoginPage = () => render((
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  ));

  it('로그인 페이지가 랜더링된다', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('Log In');
  });
});
