import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';
import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  // beforeEach는 모든 it 테스트 이전에 실행된다
  // 만약에 A라는 it 테스트에서 dispatch를 사용하고 테스트를 종료했을 때
  // 다른 B라는 it 테스트에서 dispatch는 이미 사용했으므로 잘못된 테스트가 된다
  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders input controls', () => {
    const { getByLabelText } = render(
      <LoginFormContainer />,
    );
    expect(getByLabelText('Email')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('renders "Login" Button', () => {
    const { getByText } = render(
      <LoginFormContainer />,
    );
    fireEvent.click(getByText('Login'));
    expect(dispatch).toBeCalled();
  });
});
