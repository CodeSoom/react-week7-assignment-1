import { fireEvent, render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    dispatch.mockClear();
  });

  const redersLoginFormContainer = () => render(<LoginFormContainer />);

  // 아이디, 패스워드 인풋이 보여야한다.
  it('renders input controls', () => {
    const { getByLabelText } = redersLoginFormContainer();

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  // 로그인 버튼 클릭 시 dispatch가 불려야 한다.
  it('renders login button', () => {
    const { queryByText } = redersLoginFormContainer();

    fireEvent.click(queryByText('Login'));

    expect(dispatch).toBeCalled();
  });
});
