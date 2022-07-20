import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('<LoginForm />', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  const renderLoginForm = ({ email, password }) => render((
    <LoginForm
      email={email}
      password={password}
      onChange={handleChange}
    />
  ));

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginForm({ email: '', password: '' });

    expect(getByLabelText('E-mail')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it('renders submit button', () => {
    const { getByText } = renderLoginForm({ email: '', password: '' });

    const button = getByText('Log In');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'submit');
  });

  context('with email and password', () => {
    const loginFields = {
      email: 'tester@example.com',
      password: 'test',
    };

    it('it renders current email and password', () => {
      const { getByLabelText } = renderLoginForm(loginFields);

      expect(getByLabelText('E-mail')).toHaveDisplayValue(loginFields.email);
      expect(getByLabelText('Password')).toHaveValue(loginFields.password);
    });
  });

  context('without email and password', () => {
    const loginFields = {
      email: '',
      password: '',
    };

    it('it renders empty email and password', () => {
      const { getByLabelText } = renderLoginForm(loginFields);

      expect(getByLabelText('E-mail')).toHaveValue('');
      expect(getByLabelText('Password')).toHaveValue('');
    });
  });

  describe('change email input control', () => {
    it('calls handleChange', () => {
      const { getByLabelText } = renderLoginForm({ email: '', password: '' });

      expect(handleChange).not.toBeCalled();

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: 'tester@example.com' },
      });

      expect(handleChange).toBeCalledWith({
        name: 'email',
        value: 'tester@example.com',
      });
    });
  });

  describe('change password input control', () => {
    it('calls handleChange', () => {
      const { getByLabelText } = renderLoginForm({ email: '', password: '' });

      expect(handleChange).not.toBeCalled();

      fireEvent.change(getByLabelText('Password'), {
        target: { value: 'test' },
      });

      expect(handleChange).toBeCalledWith({
        name: 'password',
        value: 'test',
      });
    });
  });
});
