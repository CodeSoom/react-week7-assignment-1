import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  function renderLoginFormContainer() {
    return render((
      <LoginFormContainer />
    ));
  }

  it('renders the login form', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('listens form fields change event', () => {
    const mockEmail = 'tester@example.com';
    useDispatch.mockImplementation(() => dispatch);

    const { getByLabelText } = renderLoginFormContainer();

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: mockEmail },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeLoginFields',
      payload: { name: 'email', value: mockEmail },
    });
  });
});
