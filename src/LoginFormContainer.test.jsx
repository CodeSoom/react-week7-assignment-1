
import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';
import { useDispatch, useSelector } from 'react-redux';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email:'test@test.com',
        password:'1234',
      },
    }));
  });
  it('renders input controls', () => {
    const { getByLabelText } = render(
        <LoginFormContainer />
    );
  
    expect(getByLabelText('E-mail').value).toBe('test@test.com');
    expect(getByLabelText('Password').value).toBe('1234');

    fireEvent.change(getByLabelText('E-mail'), {
      target: {value: 'new email'},
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeLoginField',
      payload: { name: 'email', value: 'new email' },
    });
  });

  it('listens change events', () => {
    const { getByLabelText } = render(
        <LoginFormContainer />
    );
  
    fireEvent.change(getByLabelText('E-mail'), {
      target: {value: 'new email'},
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeLoginField',
      payload: { name: 'email', value: 'new email' },
    });
  });
   
  it('renders "Log In" button', () => {
    const { getByText } = render(
      <LoginFormContainer />
  );

  fireEvent.click(getByText('Log In'));
  expect(dispatch).toBeCalled();
  });
});
