import React from 'react';

import { render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('제목, 이메일 입력창, 암호 입력창을 보여줍니다.', () => {
    const { getByText, queryByLabelText } = render(<LoginForm />);

    expect(getByText(/Log in/)).not.toBeNull();
    expect(queryByLabelText(/E-mail/)).not.toBeNull();
    expect(queryByLabelText(/Password/)).not.toBeNull();
  });
});
