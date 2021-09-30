import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  const renderLoginForm = ({ email, password }) => render((
    <LoginForm
      fields={{ email, password }}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  ));

  const email = 'test@example.com';
  const password = 'test';

  it('사용자 입력 창을 렌더링한다.', () => {
    const { getByLabelText } = renderLoginForm({
      email, password,
    });

    const controls = [
      { label: 'E-mail', value: email },
      { label: 'Password', value: password },
    ];

    controls.forEach(({ label, value }) => {
      const input = getByLabelText(label);
      expect(input.value).toBe(value);
    });
  });

  it('사용자 입력시 입력 이벤트 처리 함수가 실행된다', () => {
    const { getByLabelText } = renderLoginForm({
      email, password,
    });

    const controls = [
      { label: 'E-mail', name: 'email', value: 'tester@example.com' },
      { label: 'Password', name: 'password', value: '1234' },
    ];

    controls.forEach(({
      label, name, value,
    }) => {
      const input = getByLabelText(label);

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({
        name,
        value,
      });
    });
  });

  it('로그인 버튼을 렌더링한다.', () => {
    const { getByText } = renderLoginForm({});

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
