import React from 'react';

import { render } from '@testing-library/react';

import LoginForm from './LoginForm';

const renderLoginForm = () => render(<LoginForm />);

describe('LoginForm', () => {
  it('이메일과 비밀번호 폼이 있다.', () => {
    const { getByLabelText } = renderLoginForm();

    expect(getByLabelText('Email')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
