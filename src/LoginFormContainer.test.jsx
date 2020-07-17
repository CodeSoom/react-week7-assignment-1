import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');
describe('LoginFormContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: '',
        password: '',
      },
    }));
  });

  it('render input controls', () => {
    const { getByLabelText } = render((
      <LoginFormContainer />
    ));

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
