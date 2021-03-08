import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: '',
        password: '',
      },
    }));
  });

  function renderLoginFormContainer() {
    return render(<LoginFormContainer />);
  }

  it('renders login form', () => {
    const { getByLabelText, getByText } = renderLoginFormContainer();

    expect(getByLabelText('Email')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();

    fireEvent.click(getByText('Log In'));

    expect(dispatch).toBeCalled();
  });

  it('listens to input change events', () => {
    const { getByLabelText } = renderLoginFormContainer();

    fireEvent.change(getByLabelText('Email'), {
      target: { value: 'test@test.com' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeLoginField',
      payload: { name: 'email', value: 'test@test.com' },
    });
  });
});
