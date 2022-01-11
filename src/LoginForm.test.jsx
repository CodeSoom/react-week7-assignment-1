import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('input control들을 렌더링하고, 이벤트 변화를 감지한다.', () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render((
      <LoginForm onChange={handleChange} />
    ));

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: 'tester@example.com' },
    });
    expect(handleChange).toBeCalled();
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
