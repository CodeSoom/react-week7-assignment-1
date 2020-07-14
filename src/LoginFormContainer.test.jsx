import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  const email = 'tester@example.com';
  const password = 'password';

  beforeEach(() => {
    dispatch.mockClear();

    useSelector.mockImplementation((selector) => selector({
      loginFields: { email, password },
    }));
  });

  function renderLoginFormContainer() {
    return render((
      <LoginFormContainer />
    ));
  }

  it('listens form fields change event', () => {
    const mockEmail = 'mock@example.com';
    const mockPassword = 'mockPassword';
    useDispatch.mockImplementation(() => dispatch);

    const { getByLabelText } = renderLoginFormContainer();

    const controls = [
      { label: 'E-mail', value: mockEmail, name: 'email' },
      { label: 'Password', value: mockPassword, name: 'password' },
    ];

    controls.forEach(({ label, value, name }) => {
      fireEvent.change(getByLabelText(label), {
        target: { value },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeLoginFields',
        payload: { name, value },
      });
    });
  });
});
