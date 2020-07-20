import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');
describe('LoginFormContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test',
        password: '1234',
      },
    }));
  });

  it('renders input controls', () => {
    const { getByLabelText } = render((
      <LoginFormContainer />
    ));

    expect(getByLabelText('E-mail').value).toBe('test@test');
    expect(getByLabelText('Password').value).toBe('1234');
  });

  it('listens change events', () => {
    const { getByLabelText } = render((
      <LoginFormContainer />
    ));

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: 'new email' },
    });
    expect(dispatch).toBeCalledWith({
      type: 'changeLoginFields',
      payload: { name: 'email', value: 'new email' },
    });
  });
});
