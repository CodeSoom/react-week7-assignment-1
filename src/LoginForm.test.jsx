import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const fields = {
    email: '',
    password: '',
  };
  const onChange = jest.fn();
  const onSubmit = jest.fn();

  const renderLoginForm = () => render(
    <LoginForm fields={fields} onChange={onChange} onSubmit={onSubmit} />,
  );

  afterEach(() => {
    onChange.mockClear();
    onSubmit.mockClear();
  });

  it('이메일과 비밀번호 폼이 있다.', () => {
    const { getByLabelText } = renderLoginForm();

    expect(getByLabelText('Email')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('폼이 변경되면 폼 변경함수가 호출된다.', () => {
    const { getByLabelText } = renderLoginForm();

    fireEvent.change(getByLabelText('Email'), {
      target: { value: 'test' },
    });

    expect(onChange).toBeCalled();
  });

  it('폼전송 버튼이 있다.', () => {
    const { getByText } = renderLoginForm();

    expect(getByText('로그인')).not.toBeNull();
  });

  it('폼전송 버튼을 클릭하면 전송함수가 호출된다', () => {
    const { getByText } = renderLoginForm();

    fireEvent.click(getByText('로그인'));

    expect(onSubmit).toBeCalled();
  });
});
