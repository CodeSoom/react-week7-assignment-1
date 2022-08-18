import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

jest.mock('react-redux');

describe('LoginPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      userfields: {
        email: 'test@email.com',
        password: 'test',
      },
    }));
  });

  const renderLoginPage = () => render(
    <MemoryRouter initialEntries={['/login']}>
      <LoginPage />
    </MemoryRouter>,
  );

  it('renders title', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('Login');
  });

  // LoginFormContainer.test에도 동일하게 작성되어 있는 코드이다. 이중으로 테스트 장치를 만든것.
  it('renders input control', () => {
    const { queryByLabelText } = renderLoginPage();

    expect(queryByLabelText('E-mail')).not.toBeNull();
  });
});
