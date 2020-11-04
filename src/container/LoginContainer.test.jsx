import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import LoginContainer from './LoginContainer';

jest.mock('react-redux');

describe('LoginContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  function renderLoginContainer() {
    return render((
      <LoginContainer />
    ));
  }

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('render login form ', () => {
    const { getByLabelText } = renderLoginContainer();
    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  context('when login fields change', () => {
    it('calls field change action', () => {
      const { getByLabelText } = renderLoginContainer();

      fireEvent.change(getByLabelText('E-mail'), { target: { value: 'tester@example.com' } });

      expect(dispatch).toBeCalled();
    });
  });

  context('when login button click', () => {
    it('calls request login action', () => {
      const { getByText } = renderLoginContainer();

      fireEvent.click(getByText('Log In'));

      expect(dispatch).toBeCalled();
    });
  });
});
