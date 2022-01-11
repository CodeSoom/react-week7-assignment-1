import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('input control들을 렌더링하고, 이벤트 변화를 감지한다.', () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render((
      <LoginForm onChange={handleChange} />
    ));

    const controls = [
      { label: 'E-mail', name: 'E-mail', value: 'tester@example.com' },
    ];

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);

      expect(input).not.toBeNull();

      fireEvent.change(input, {
        target: { value },
      });
      expect(handleChange).toBeCalledWith({
        name: 'email',
        value: 'tester@example.com',
      });
    });
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
