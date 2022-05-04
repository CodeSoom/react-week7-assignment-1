import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders input controls and change events', () => {
    const handleChange = jest.fn();

    const { queryByLabelText } = render((
      <LoginForm onChange={handleChange} />
    ));

    // - 강의[1] 29:21 : 테스트할 input 이 여러 개일 때, 아래와 같이 반복문으로 테스트할 수 있다.
    const controls = [
      { label: 'email', name: 'email', value: 'tester@example.com' },
      { label: 'password', name: 'password', value: 'test' },
    ];

    controls.forEach(({ label, name, value }) => {
      const input = queryByLabelText(label);

      expect(input).not.toBeNull();

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalled();
    });
  });

  it('renders login button', () => {
    const handleSubmit = jest.fn();

    const { getByText } = render((
      <LoginForm onSubmit={handleSubmit} />
    ));

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
