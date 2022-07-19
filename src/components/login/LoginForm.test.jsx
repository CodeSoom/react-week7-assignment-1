import { render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('<LoginForm />', () => {
  const renderLoginForm = ({ email = '', password = '' } = {}) => render((
    <LoginForm
      email={email}
      password={password}
    />
  ));

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginForm();

    expect(getByLabelText('E-mail')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it('renders submit button', () => {
    const { getByText } = renderLoginForm();

    const button = getByText('Log In');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'submit');
  });

  context('with email and password values', () => {
    const loginFields = {
      email: 'test@example.com',
      password: 'test',
    };

    it('it renders current email and password', () => {
      const { getByLabelText } = renderLoginForm(loginFields);

      expect(getByLabelText('E-mail')).toHaveDisplayValue(loginFields.email);
      expect(getByLabelText('Password')).toHaveValue(loginFields.password);
    });
  });

  context('without email and password values', () => {
    const loginFields = [{
      email: undefined,
      password: undefined,
    }, {
      email: '',
      password: '',
    }];

    loginFields.forEach(({ email, password }) => {
      it('it renders empty email and password', () => {
        const { getByLabelText } = renderLoginForm({
          email,
          password,
        });

        expect(getByLabelText('E-mail')).toHaveValue('');
        expect(getByLabelText('Password')).toHaveValue('');
      });
    });
  });
});
