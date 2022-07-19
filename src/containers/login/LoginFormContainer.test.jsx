import { render } from '@testing-library/react';

import given from 'given2';

import { useSelector } from 'react-redux';

import { EMAIL, PASSWORD } from '../../../fixtures/login';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('<LoginFormContainer />', () => {
  given('loginFields', () => ({
    email: '',
    password: '',
  }));

  useSelector.mockImplementation((selector) => selector({
    loginFields: given.loginFields,
  }));

  const renderLoginFormContainer = () => render((<LoginFormContainer />));

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('E-mail')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it('renders submit button', () => {
    const { getByText } = renderLoginFormContainer();

    const button = getByText('Log In');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'submit');
  });

  context('with email and password', () => {
    given('loginFields', () => ({
      email: EMAIL,
      password: PASSWORD,
    }));

    it('it renders current email and password', () => {
      const { getByLabelText } = renderLoginFormContainer();

      expect(getByLabelText('E-mail')).toHaveDisplayValue(EMAIL);
      expect(getByLabelText('Password')).toHaveValue(PASSWORD);
    });
  });

  context('without email and password', () => {
    given('loginFields', () => ({
      email: '',
      password: '',
    }));

    it('it renders empty email and password', () => {
      const { getByLabelText } = renderLoginFormContainer();

      expect(getByLabelText('E-mail')).toHaveValue('');
      expect(getByLabelText('Password')).toHaveValue('');
    });
  });
});
