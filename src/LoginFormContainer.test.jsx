import React from 'react';

import { MemoryRouter } from 'react-router-dom';

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
        email: 'test@test.com',
        password: '1234567*',
      },
    }));
  });

  const renderLoginFormContainer = () => render((
    <MemoryRouter>
      <LoginFormContainer />
    </MemoryRouter>
  ));

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('E-mail').value).toBe('test@test.com');
    expect(getByLabelText('Password').value).toBe('1234567*');
  });

  it('renders login button and listens click event', () => {
    const { getByText } = renderLoginFormContainer();

    fireEvent.click(getByText('Log In'));

    expect(dispatch).toBeCalled();
  });
});
