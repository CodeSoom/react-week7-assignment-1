import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

jest.mock('react-redux');

describe('LoginForm', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  })

  function renderLoginForm() {
    <MemoryRouter>
      <LoginForm />
    </MemoryRouter>
  }

  it('render input controls', () => {
    const { getByLabelText } = renderLoginForm();
    
    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  })

  it('render "Log In" button', () => {
    const handleSubmit = jest.fn();
    const { getByText } = renderLoginForm();
    
    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  })

});