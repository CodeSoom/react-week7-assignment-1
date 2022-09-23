import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

import controls from '../../fixtures/controls';
import loginFields from '../../fixtures/loginFields';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  afterEach(() => {
    handleSubmit.mockClear();
    handleChange.mockClear();
  });

  function renderLoginForm({ email = '', password = '' } = {}) {
    return render(
      <LoginForm
        fields={{ email, password }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />,
    );
  }

  it('renders input controls', () => {
    const { email, password } = loginFields;

    const { getByLabelText } = renderLoginForm({ email, password });

    controls.forEach(({ label, name }) => {
      const value = loginFields[name];

      const input = getByLabelText(label);

      expect(input.value).toBe(value);
    });
  });

  it('listens chage events', () => {
    const { getByLabelText } = renderLoginForm();

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders \'Log In\' button', () => {
    const { getByText } = renderLoginForm();

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
