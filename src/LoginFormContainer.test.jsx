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
      loginField: {
        email: 'test@test.co.kr',
        password: 'test',
      },
    }));
  });

  const renderLoginFormContainer = () => render(<LoginFormContainer />);

  it('render user name and password ', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('E-mail').value).toBe('test@test.co.kr');
    expect(getByLabelText('Password').value).toBe('test');
  });

  it('renders login button', () => {
    const { getByText } = renderLoginFormContainer();

    expect(getByText('Login')).not.toBeNull();

    fireEvent.click(getByText('Login'));

    expect(dispatch).toBeCalled();
  });
});
