// 관심사: 리덕스 (상태변화 및 상태 불러오기)
// ToDo input Field 관련 테스트 추가
// ToDo accessToken 관련 테스트 추가
import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      inputField: {
        email: '',
        password: '',
      },
      accessToken: 'ACCESS_TOKEN',
    }));
  });

  it('renders "Submit" button', () => {
    const { getByText } = render((
      <LoginFormContainer />
    ));

    expect(getByText('Submit')).toBeInTheDocument();
  });

  context('with onClick event', () => {
    it('calls dispatch to get accessToken', () => {
      const { getByText } = render((
        <LoginFormContainer />
      ));

      fireEvent.click(getByText('Submit'));

      expect(dispatch).toBeCalled();
    });
  });

  it('renders "E-mail, Password" input', () => {
    const { getByLabelText } = render((
      <LoginFormContainer />
    ));

    expect(getByLabelText('E-mail')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  context('with onChange event', () => {
    it('calls dispatch to set name for value', () => {
      const { getByLabelText } = render((
        <LoginFormContainer />
      ));

      fireEvent.change(getByLabelText('E-mail'), {
        target: {
          name: 'email',
          value: 'test@mail',
        },
      });
      fireEvent.change(getByLabelText('Password'), {
        target: {
          name: 'password',
          value: '123',
        },
      });

      expect(dispatch).toBeCalled();
    });
  });
});
