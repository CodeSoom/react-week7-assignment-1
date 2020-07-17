import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer.test', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: '',
        password: '',
      },
    }));
  });

  it('renders login button', () => {
    const { container } = render((
      <LoginFormContainer />
    ));

    expect(container).toHaveTextContent('ID');
  });
});
