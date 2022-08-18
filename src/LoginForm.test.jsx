import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

const LOGIN_FIELDS = {
  email: '',
  password: '',
};

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  function renderLoginForm({
    loginFields = LOGIN_FIELDS,
    onChange = handleChange,
    onClick = handleClick,
    accessToken = '',
  }) {
    return render((
      <LoginForm
        loginFields={loginFields}
        onChange={onChange}
        onClick={onClick}
        accessToken={accessToken}
      />
    ));
  }

  context('when logged out', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('renders login fields', () => {
      const { queryByLabelText } = renderLoginForm();

      expect(queryByLabelText('E-mail')).not.toBeNull();
      expect(queryByLabelText('Password')).not.toBeNull();
    });

    it('renders login button', () => {
      const { container } = renderLoginForm();

      expect(container).toContainHTML('type="button"');
    });

    it('listens input change for "changeLoginField" action', () => {
      const { queryByLabelText } = renderLoginForm();
      const controls = [
        {
          label: 'E-mail',
          value: 'tester@example.com',
        },
        {
          label: 'Password',
          value: 'test',
        },
      ];

      controls.forEach(({ label, value }) => {
        fireEvent.change(queryByLabelText(label), { target: { value } });

        expect(handleChange).toBeCalled();
      });
    });

    it('listens "Log In" button click for "requestLogin" action', () => {
      const { queryByRole } = render((
        <LoginForm />
      ));

      fireEvent.click(queryByRole('button'));

      expect(handleClick).toBeCalled();
    });
  });
});
