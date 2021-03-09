import React from 'react';

import { render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('제목, 이메일 입력창, 암호 입력창, 버튼을 보여줍니다.', () => {
    const { queryByText, queryByLabelText } = render(<LoginForm />);

    expect(queryByText(/Log in/)).not.toBeNull();

    expect(queryByLabelText(/E-mail/)).not.toBeNull();
    expect(queryByLabelText(/Password/)).not.toBeNull();

    expect(queryByText(/Login/)).not.toBeNull();
  });
});
