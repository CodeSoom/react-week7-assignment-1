import { fireEvent, render, screen } from '@testing-library/react';
import loginControls from '../fixtures/loginControls';
import UserInfo from './UserInfo';

describe('UserInfo', () => {
  const email = loginControls.email;
  const onClick = jest.fn();

  const renderUserInfoContainer = () =>
    render(<UserInfo email={email} onClick={onClick} />);

  describe('로그인이 되어있을 경우', () => {
    it('사용자의 이메일이 보인다.', () => {
      const { container } = renderUserInfoContainer();
      expect(container).toHaveTextContent(email);
    });
    describe('로그아웃 버튼 클릭 시,', () => {
      it('로그아웃 함수가 호출된다.', () => {
        const { getByRole } = renderUserInfoContainer();
        fireEvent.click(getByRole('button', { type: 'button' }));
        expect(onClick).toBeCalled();
      });
    });
  });
});
