import { fireEvent, render } from '@testing-library/react';

import given from 'given2';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  beforeEach(() => {
    given('fields', () => ({
      email: '',
      password: '',
    }));
    given('isLogin', () => false);

    jest.clearAllMocks();
  });

  const onChange = jest.fn();
  const onSubmit = jest.fn();
  const onLogout = jest.fn();

  const renderLoginForm = () => render((
    <LoginForm
      fields={given.fields}
      isLogin={given.isLogin}
      onChange={onChange}
      onSubmit={onSubmit}
      onLogout={onLogout}
    />
  ));

  context('without fields', () => {
    given('fields', () => undefined);

    it('renders login form', () => {
      const { queryByLabelText } = renderLoginForm();

      expect(queryByLabelText('E-mail')).not.toBeNull();
      expect(queryByLabelText('Password')).not.toBeNull();
    });
  });

  context('without login', () => {
    it('renders login form', () => {
      const { queryByLabelText } = renderLoginForm();

      expect(queryByLabelText('E-mail')).not.toBeNull();
      expect(queryByLabelText('Password')).not.toBeNull();
    });

    it('listens for change events', () => {
      const controls = [
        { label: 'E-mail', name: 'email', value: 'tester@example.com' },
        { label: 'Password', name: 'password', value: 'tester' },
      ];

      const { getByLabelText } = renderLoginForm();

      controls.forEach(({ label, name, value }) => {
        fireEvent.change(
          getByLabelText(label),
          { target: { value } },
        );

        expect(onChange).toBeCalledWith({ name, value });
      });
    });

    it('renders "log in" button', () => {
      const { container } = renderLoginForm();

      expect(container).toHaveTextContent('log in');
    });

    it('listens for click event on submit', () => {
      const { getByText } = renderLoginForm();

      fireEvent.click(getByText('log in'));

      expect(onSubmit).toHaveBeenCalled();
    });

    it('renders fields value', () => {
      given('fields', () => ({
        email: 'tester@example.com',
        password: 'tester',
      }));

      const { queryByDisplayValue } = renderLoginForm();

      expect(queryByDisplayValue('tester@example.com')).not.toBeNull();
      expect(queryByDisplayValue('tester')).not.toBeNull();
    });
  });

  context('with login', () => {
    given('isLogin', () => true);

    it("doesn't render email and password input field", () => {
      const { queryByLabelText } = renderLoginForm();

      expect(queryByLabelText('E-mail')).toBeNull();
      expect(queryByLabelText('Password')).toBeNull();
    });

    it('renders "log-out" button', () => {
      const { container } = renderLoginForm();

      expect(container).toHaveTextContent('log out');
    });

    it('listens for click event on log-out', () => {
      const { getByText } = renderLoginForm();

      fireEvent.click(getByText('log out'));

      expect(onLogout).toBeCalled();
    });
  });
});
