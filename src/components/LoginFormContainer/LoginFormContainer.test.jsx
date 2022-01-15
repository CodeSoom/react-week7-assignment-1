import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';
import { handleLoginForm } from '../../actions';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      loginForm: {
        id: '',
        pw: '',
      },
    }));
  });

  it('로그인 버튼 클릭시 로그인 요청을 보낸다.', () => {
    const { getByText } = render((<LoginFormContainer />));

    fireEvent.click(getByText('로그인'));

    expect(dispatch).toBeCalled();
  });

  it('로그인 폼을 수정시 폼 상태를 변경하는 디스패치를 실행한다.', () => {
    const { getByLabelText } = render((<LoginFormContainer />));

    const idInput = getByLabelText('아이디');
    const id = 'testId';

    fireEvent.change(idInput, { target: { value: id } });

    expect(dispatch).toBeCalledWith(handleLoginForm('id', id));
  });
});
