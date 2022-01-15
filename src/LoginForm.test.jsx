import { render, fireEvent } from '@testing-library/react';

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
        fields={{ email, password }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    ));
  }
  it('input control들을 렌더링하고, 이벤트 변화를 감지한다.', () => {
    const email = 'test@test';
    const password = '1234';

    const { getByLabelText } = renderLoginForm({ email, password });

    const controls = [
      {
        label: 'E-mail',
        name: 'email',
        origin: email,
        value: 'tester@example.com',
      },
      {
        label: 'Password',
        name: 'password',
        origin: password,
        value: 'tester',
      },
    ];

    controls.forEach(({
      label, name, origin, value,
    }) => {
      const input = getByLabelText(label);

      expect(input.value).toBe(origin);

      fireEvent.change(input, {
        target: { value },
      });
      expect(handleChange).toBeCalledWith({
        name,
        value,
      });
    });
  });

  it('Login 버튼을 누르면 handleSubmit이 실행된다.', () => {
    const { queryByText } = renderLoginForm({ });

    fireEvent.click(queryByText('Login'));
    expect(handleSubmit).toBeCalled();
  });
});
