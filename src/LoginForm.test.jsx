import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const dispatch = jest.fn();
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    handleChange.mockClear();
    handleSubmit.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  function renderLoginForm(email, password) {
    return  render(
      <LoginForm
        fields={{ email, password }}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />,
    );
  }

  it('render Input Controls and listens change events', () => {
    const email = 'test@test';
    const password = '1234';

    const { getByLabelText } = renderLoginForm(email, password);

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
        value: 'test',
      },
    ]; // origin: 이전값.원래값

    controls.forEach(({ label, name, origin, value }) => {
      const input = getByLabelText(label);

      // expect(input).not.toBeNull();
      expect(input.value).toBe(origin);

      fireEvent.change(input, {
        target: { value },
      });

      // expect(handleChange).toBeCalled();
      expect(handleChange).toBeCalledWith({
        name,
        value,
      });
    });
  });

  it('renders "Log In" button', () => {
    const { getByText } = renderLoginForm({});

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
