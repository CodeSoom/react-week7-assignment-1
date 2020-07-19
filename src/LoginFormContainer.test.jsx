import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();
  const handleChange = jest.fn();

  // beforeEach는 모든 it 테스트 이전에 실행된다
  // 만약에 A라는 it 테스트에서 dispatch를 사용하고 테스트를 종료했을 때
  // 다른 B라는 it 테스트에서 dispatch는 이미 사용했다고 판단하여
  // 테스트를 잘 못 수행하게 된다
  beforeEach(() => {
    dispatch.mockClear();
    handleChange.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test.com',
        password: 'test',
      },
    }));
  });

  it('renders input controls', () => {
    const { getByLabelText } = render(
      <LoginFormContainer onChange={handleChange} />,
    );

    expect(getByLabelText('Email').value).toBe('test@test.com');
    expect(getByLabelText('Password').value).toBe('test');
  });

  it('listens change events', () => {
    const { getByLabelText } = render(
      <LoginFormContainer onChange={handleChange} />,
    );

    fireEvent.change(getByLabelText('Email'), {
      target: { value: 'new@email' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeLoginField',
      payload: { name: 'email', value: 'new@email' },
    });
  });

  it('renders "Login" Button', () => {
    const { getByText } = render(
      <LoginFormContainer />,
    );

    fireEvent.click(getByText('Login'));

    expect(dispatch).toBeCalled();
  });
});
