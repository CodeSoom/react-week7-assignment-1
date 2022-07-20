import { render, fireEvent } from '@testing-library/react';

import given from 'given2';

import { useSelector, useDispatch } from 'react-redux';

import { setLoginFields } from '../../actions';

import {
  EMAIL,
  PASSWORD,
  EMAIL_INPUT,
  PASSWORD_INPUT,
} from '../../../fixtures/login';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('<LoginFormContainer />', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
  });

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

  describe('changes email and password', () => {
    it('dispatch setLoginFields', () => {
      const { getByLabelText } = renderLoginFormContainer();

      expect(dispatch).not.toBeCalled();

      fireEvent.change(getByLabelText(EMAIL_INPUT.label), {
        target: { value: EMAIL_INPUT.value },
      });

      expect(dispatch).toBeCalledWith(setLoginFields({
        name: EMAIL_INPUT.name,
        value: EMAIL_INPUT.value,
      }));

      fireEvent.change(getByLabelText(PASSWORD_INPUT.label), {
        target: { value: PASSWORD_INPUT.value },
      });

      expect(dispatch).toBeCalledWith(setLoginFields({
        name: PASSWORD_INPUT.name,
        value: PASSWORD_INPUT.value,
      }));
    });
  });
});
