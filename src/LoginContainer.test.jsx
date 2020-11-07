import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import LoginContainer from './LoginContainer';

describe('<LoginContainer />', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: '',
        password: '',
      },
    }));
  });

  it('renders email and password input', () => {
    const { getByLabelText } = render(
      <LoginContainer />,
    );

    expect(getByLabelText('E-mail')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });
});
