import React from 'react';

import { render } from '@testing-library/react';

import LoginContainer from './LoginContainer';

describe('LoginContainer', () => {
  it('이메일과 비밀번호 폼이 있다.', () => {
    const { getByLabelText } = render(<LoginContainer />);

    expect(getByLabelText('Email')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
