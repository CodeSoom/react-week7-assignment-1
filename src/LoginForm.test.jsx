import React from 'react';

import { useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

jest.mock('react-redux');

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  const email = 'testEmail';
  const password = 'testPassword';
  
  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email:'',
        password:'',
      },
      accessToken:'',
    }));
  });

  it('renders login page', () => {
    const { getByLabelText }= render((
      <LoginForm
        fields={{ email, password }}
      />
    ));

    expect(getByLabelText('ID')).not.toBe('testEmail');
    expect(getByLabelText('PW')).not.toBe('testPassword');
  });

  it('clicks login button', () => {
    const { getByText }= render((
      <LoginForm
        fields={{ email, password }}
        onClick={handleSubmit}
      />
    ));

    fireEvent.click(getByText('로그인'));
    expect(handleSubmit).toBeCalled();
  });

  it('change login fields data', () => {
    const { getByLabelText }= render((
      <LoginForm
        fields={{ email, password }}
        onChange={handleChange}
      />
    ));

    fireEvent.change(getByLabelText('ID'), {
      target: { value : 'email test data' },    
    });

    expect(handleChange).toBeCalledWith({
      name: 'email',
      value: 'email test data',
    });
  });
});
