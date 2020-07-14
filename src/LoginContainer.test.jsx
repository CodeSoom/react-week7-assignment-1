import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginContainer from './LoginContainer';

const renderLoginContainer = () => render(<LoginContainer />);

describe('LoginContainer', () => {
  it('이메일과 비밀번호 폼이 있다.', () => {
    const { getByLabelText } = renderLoginContainer();

    expect(getByLabelText('Email')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('이메일이 변경된다.', () => {
    const { getByLabelText } = renderLoginContainer();

    fireEvent.change(getByLabelText('Email'), {
      target: { value: 'test@test.com' },
    });

    expect(getByLabelText('Email').value).toBe('test@test.com');
  });

  it('비밀번호가 변경된다.', () => {
    const { getByLabelText } = renderLoginContainer();

    fireEvent.change(getByLabelText('Password'), {
      target: { value: '1234' },
    });

    expect(getByLabelText('Password').value).toBe('1234');
  });
});
