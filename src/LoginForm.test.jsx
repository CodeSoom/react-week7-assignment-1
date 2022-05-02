import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();
  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderLoginForm({ email, password } = {}) {
    return render(
      <LoginForm
        fields={{ email, password }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />,
    );
  }

  it('로그인 폼을 렌더한다.', () => {
    const email = 'test@test';
    const password = '1234';

    const { getByLabelText } = renderLoginForm({ email, password });

    const controls = [
      {
        label: 'E-mail',
        value: email,
      },
      {
        label: 'Password',
        value: password,
      },
    ];

    controls.forEach(({
      label, value,
    }) => {
      const input = getByLabelText(label);

      expect(input.value).toBe(value);
    });
  });

  it('로그인 폼의 입력 이벤트를 감지한다.', () => {
    const { getByLabelText } = renderLoginForm();

    const controls = [
      { label: 'E-mail', name: 'email', value: 'test@test.com' },
      { label: 'Password', name: 'password', value: 'test' },
    ];

    controls.forEach(({
      label, name, value,
    }) => {
      const input = getByLabelText(label);

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('"로그인" 버튼을 렌더한다.', () => {
    const { getByText } = renderLoginForm({ });

    fireEvent.click(getByText('로그인'));

    expect(handleSubmit).toBeCalled();
  });
});
