import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  })

  function renderLoginFormContainer() {
    <MemoryRouter>
      <LoginFormContainer />
    </MemoryRouter>
  }

  it('render input controls', () => {
    const { getByLabelText } = renderLoginFormContainer();
    
    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  })

  it('render "Log In" button', () => {
    const { getByText } = renderLoginFormContainer();

    fireEvent.click(getByText('Log In'));

    expect(dispatch).toBeCalled();
  })
});