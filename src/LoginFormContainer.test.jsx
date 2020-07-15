import React from 'react';

import { render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  function renderLoginFormContainer() {
    return render(<LoginFormContainer />);
  }

  it('renders email and password input', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('E-mail')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });
});
