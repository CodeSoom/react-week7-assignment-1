// 관심사: 라우터
// ToDo accessToken 관련 테스트 추가
import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  useSelector.mockImplementation((selector) => selector({
    inputField: {
      email: '',
      password: '',
    },
    accessToken: '',
  }));

  it('renders "Log In" title', () => {
    const { container } = render((<LoginPage />));

    expect(container).toHaveTextContent('Log In');
  });
});
