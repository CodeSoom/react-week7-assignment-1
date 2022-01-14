// 관심사: 로그아웃 폼을 화면에 나타내기
// ToDo field 관련 테스트 추가
import { render } from '@testing-library/react';

import LogoutForm from './LoginForm';

describe('LogoutForm', () => {
  const renderLogoutForm = () => render((
    <LogoutForm />
  ));

  it('///', () => {
    renderLogoutForm();
  });
});
