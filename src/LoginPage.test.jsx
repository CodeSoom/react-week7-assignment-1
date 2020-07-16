import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

jest.mock('react-redux');

describe('LoginPage', () => {
  const handleChange = jest.fn();
  const hanedleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    hanedleSubmit.mockClear()

    // useSelector.mockImplementation((selector) => selector({
    //   loginFields: {
    //     email:'',
    //     password:'',
    //   }
    // }));
  });

  it('renders login page', () => {
    const email = 'testEmail';
    const password = 'testPassword';

    render((
      <LoginPage 
        fields={{ email, password }}
        onChange={handleChange} 
        onSubmit={hanedleSubmit} 
      />  
    ))
  });
});