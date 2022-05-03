import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import { logout } from './actions';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test',
        password: '1234',
      },
      accessToken: given.accessToken,
    }));
  });

  context('로그아웃 상태일 때', () => {
    given('accessToken', () => '');

    it('로그인 폼을 렌더한다.', () => {
      const { getByLabelText } = render(
        <LoginFormContainer />,
      );

      expect(getByLabelText('E-mail').value).toBe('test@test');
      expect(getByLabelText('Password').value).toBe('1234');

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: 'new email' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeLoginField',
        payload: { name: 'email', value: 'new email' },
      });
    });

    it('"로그인" 버튼을 렌더한다.', () => {
      const { getByText } = render(
        <LoginFormContainer />,
      );

      fireEvent.click(getByText('로그인'));

      expect(dispatch).toBeCalled();
    });
  });

  context('로그인 상태일 때', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('"Log out" 버튼을 렌더한다.', () => {
      const { getByText } = render(
        <LoginFormContainer />,
      );

      fireEvent.click(getByText('Log out'));

      expect(dispatch).toBeCalledWith(logout());
    });
  });
});
