import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderLoginForm({ email, password }) {
    return render((
      <LoginForm
        loginFields={{ email, password }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    ));
  }

  it('renders input controls and change events', () => {
    // - 변경 이전값으로 사용할 email, password (previousValue)
    const email = 'test@test';
    const password = '1234';

    const { queryByLabelText } = renderLoginForm({ email, password });

    // - 강의[1] 29:21 : 테스트할 input 이 여러 개일 때, 아래와 같이 반복문으로 테스트할 수 있다.
    const controls = [
      {
        label: 'email',
        name: 'email',
        previousValue: { email },
        value: 'tester@example.com',
      },
      {
        label: 'password',
        name: 'password',
        previousValue: { password },
        value: 'test',
      },
    ];

    controls.forEach(({
      label, name, previousValue, value,
    }) => {
      const input = queryByLabelText(label);

      expect(input).not.toBeNull();

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalled();
    });
  });

  it('renders login button', () => {
    const { getByText } = renderLoginForm({ });

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
