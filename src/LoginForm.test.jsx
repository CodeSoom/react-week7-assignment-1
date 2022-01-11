import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('input control들을 렌더링한다.', () => {
    const { getByLabelText } = render((
      <LoginForm />
    ));

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('Login 버튼을 렌더링한다.', () => {
    const handleSubmit = jest.fn();

    const { queryByText } = render((
      <LoginForm onSubmit={handleSubmit} />
    ));

    fireEvent.click(queryByText('Login'));
    expect(handleSubmit).toBeCalled();
  });
});
