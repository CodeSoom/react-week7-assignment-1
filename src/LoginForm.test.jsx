import React from 'react';

import { render } from '@testing-library/react';

import LoginForm from './LoginForm';

jest.mock('react-redux');

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const hanedleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    hanedleSubmit.mockClear();

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
      <LoginForm
        fields={{ email, password }}
        onChange={handleChange}
        onSubmit={hanedleSubmit}
      />
    ));
  });
});
