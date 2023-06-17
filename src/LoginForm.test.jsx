import { fireEvent, render } from '@testing-library/react';
import loginFields from '../fixtures/loginFields';
import LoginForm from './LoginForm';

describe('LoginContainer', () => {
  const { email, password } = loginFields;
  const onChange = jest.fn();
  const onSubmit = jest.fn((e) => e.preventDefault());

  const renderLoginForm = () =>
    render(
      <LoginForm
        onChange={onChange}
        onSubmit={onSubmit}
        email={email}
        password={password}
      />
    );

  describe('로그인이 안되어있을 경우', () => {
    it('인풋이 보인다.', () => {
      const { container } = renderLoginForm();
      expect(container).toHaveTextContent('E-mail');
      expect(container).toHaveTextContent('Password');
    });

    describe('loginfield에 입력이 일어날 때', () => {
      context('id state가 변경된다.', () => {
        it('loginFields 객체의 id가 변경된다', () => {
          const { getByLabelText } = renderLoginForm();
          fireEvent.change(getByLabelText('E-mail'), {
            target: { value: 'change' },
          });
          expect(onChange).toBeCalled();
        });
      });

      context('password가 변경될 때', () => {
        it('loginFields 객체의 password가 변경된다', () => {
          const { getByLabelText } = renderLoginForm();
          fireEvent.change(getByLabelText('Password'), {
            target: { value: 'change' },
          });
          expect(onChange).toBeCalled();
        });
      });
    });

    describe('로그인 버튼 클릭', () => {
      it('로그인 함수가 실행된다.', () => {
        const { getByRole } = renderLoginForm();
        fireEvent.click(getByRole('button', { type: 'submit' }));
        expect(onSubmit).toBeCalled();
      });
    });
  });
});
