import { fireEvent, render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import LoginContainer from './LoginContainer';
import loginControls from '../fixtures/loginControls';

describe('LoginContainer', () => {
  const dispatch = jest.fn();

  const renderLoginContainer = () => render(<LoginContainer />);

  context('로그인이 되어있을 경우', () => {
    beforeEach(() => {
      dispatch.mockClear();
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) =>
        selector({
          accessToken: given.accessToken,
          loginFields: loginControls,
        })
      );
    });

    given('accessToken', () => 'ACCESS_TOKEN');
    it('사용자의 이메일이 보인다.', () => {
      const { container } = renderLoginContainer();
      expect(container).toHaveTextContent(loginControls.email);
    });
    describe('로그아웃 버튼 클릭 시,', () => {
      it('로그아웃 함수가 호출된다.', () => {
        const { getByRole } = renderLoginContainer();
        fireEvent.click(getByRole('button', { type: 'button' }));
        expect(dispatch).toBeCalledWith({
          type: 'setAccessToken',
          payload: { accessToken: '' },
        });
      });
    });
  });

  context('로그인이 안되어있을 경우', () => {
    beforeEach(() => {
      dispatch.mockClear();
      given('accessToken', () => '');
    });

    it('인풋이 보인다.', () => {
      const { container } = renderLoginContainer();
      expect(container).toHaveTextContent('E-mail');
      expect(container).toHaveTextContent('Password');
    });

    describe('loginfield에 입력이 일어날 때', () => {
      context('id state가 변경된다.', () => {
        it('loginFields 객체의 id가 변경된다', () => {
          const { getByLabelText } = renderLoginContainer();
          fireEvent.change(getByLabelText('E-mail'), {
            target: { value: 'change' },
          });
          expect(dispatch).toBeCalledWith({
            type: 'setLoginFields',
            payload: { name: 'email', value: 'change' },
          });
        });
      });

      context('password가 변경될 때', () => {
        it('loginFields 객체의 password가 변경된다', () => {
          const { getByLabelText } = renderLoginContainer();
          fireEvent.change(getByLabelText('Password'), {
            target: { value: 'change' },
          });
          expect(dispatch).toBeCalledWith({
            type: 'setLoginFields',
            payload: { name: 'password', value: 'change' },
          });
        });
      });
    });

    describe('로그인 버튼 클릭', () => {
      it('로그인 함수가 실행된다.', () => {
        const { getByRole } = renderLoginContainer();
        fireEvent.click(getByRole('button', { type: 'submit' }));
        expect(dispatch).toBeCalled();
      });
    });
  });
});
