import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from '../LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      userLoginInputs: { email: 'test@naver', password: 'te' },
    }));
  });

  it('input을 입력하면 변경된 입력을 반영하는 dispatch함수가 실행된다.', () => {
    const { queryByLabelText } = render(<LoginFormContainer />);
    const controls = [
      { label: 'E-mail', origin: 'test@naver', value: 'test@naver.com' },
      { label: 'Password', origin: 'te', value: 'test' },
    ];

    controls.forEach(({ label, origin, value }) => {
      expect(queryByLabelText(label).value).toBe(origin);

      fireEvent.change(queryByLabelText(label), { target: { value } });

      expect(dispatch).toBeCalled();
    });
  });

  it('Login 버튼을 클릭하면 로그인하는 dispatch함수가 실행된다.', () => {
    const { queryByText } = render(<LoginFormContainer />);

    fireEvent.click(queryByText('Log In'));

    expect(dispatch).toBeCalled();
  });
});
