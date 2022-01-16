import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { setAccessToken } from '../actions';

import LoginContainer from './LoginContainer';

jest.mock('react-redux');

describe('LoginContainer', () => {
  const dispatch = jest.fn();

  const renderLoginContainer = () => render(<LoginContainer />);

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      accessToken: given.accessToken,
    }));
  });

  context('로그인이 된 상태일 때', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('"logout" 버튼이 화면에 나타난다.', () => {
      const { getByText } = renderLoginContainer();

      expect(getByText('logout')).not.toBeNull();
    });

    it('"logout" 버튼을 클릭하면, 로그아웃된다.', () => {
      const { getByText } = renderLoginContainer();

      fireEvent.click(getByText('logout'));

      expect(dispatch).toBeCalledWith(setAccessToken(''));
    });
  });

  context('로그인이 아닌 상태일 때', () => {
    it('로그인 폼이 화면에 나타난다.', () => {
      const { queryByLabelText } = renderLoginContainer();

      expect(queryByLabelText('이메일')).not.toBeNull();
      expect(queryByLabelText('패스워드')).not.toBeNull();
    });
  });
});
