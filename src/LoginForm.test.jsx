import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';
/*
1. renders input controls and listens change
2. renders login button
*/

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderLoginForm({ email, password } = {}) {
    return render(
      <LoginForm
        loginField={{ email, password }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />,
    );
  }
  it('renders input controls and listens changeEvent', () => {
    const email = 'test@naver.com';
    const password = '1234';
    const { getByLabelText } = renderLoginForm({ email, password });
    const controls = [
      // 각각의 input의 속성을 정리해둔 변수
      {
        label: 'Email',
        name: 'email',
        origin: email,
        value: 'test2@daum.net',
      },
      {
        label: 'Password',
        name: 'password',
        origin: password,
        value: '5555',
      },
    ];

    controls.forEach((control) => {
      const {
        label, origin, name, value,
      } = control;
      const input = getByLabelText(label);

      expect(input.value).toBe(origin);

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });

      // handleChange는 mock한 가짜함수이므로 value값을 변경시켜주진 못한다
      // expect(input.value).toBe(value);
    });
  });

  it("renders 'Login' button and listen submitEvent", () => {
    const { getByText } = renderLoginForm();

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
