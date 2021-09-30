import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'tester@example.com',
        password: 'test',
      },
    }));
  });

  it('사용자 입력 창을 렌더링한다.', () => {
    const { getByLabelText } = render((
      <LoginFormContainer />
    ));

    expect(getByLabelText('E-mail').value).toBe('tester@example.com');
    expect(getByLabelText('Password').value).toBe('test');
  });

  it('사용자 입력 시, changeLoginFields action이 호출된다', () => {
    const { getByLabelText } = render((
      <LoginFormContainer />
    ));

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: 'new Email' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeLoginFields',
      payload: { name: 'email', value: 'new Email' },
    });
  });

  it('로그인 버튼을 렌더링한다.', () => {
    const { getByText } = render((
      <LoginFormContainer />
    ));

    fireEvent.click(getByText('Log In'));

    expect(dispatch).toBeCalled();
  });
});
