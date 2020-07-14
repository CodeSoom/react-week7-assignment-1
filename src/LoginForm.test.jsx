import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const fields = {
    email: '',
    password: '',
  };
  const onChange = jest.fn();

  const renderLoginForm = () =>
    render(<LoginForm fields={fields} onChange={onChange} />);

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
});
