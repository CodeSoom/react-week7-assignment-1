import React from 'react';

import { render } from '@testing-library/react';

import LoginContainer from './LoginContainer';

describe('LoginContainer', () => {
  it('renders', () => {
    const { container } = render(<LoginContainer />);

    expect(container).toHaveTextContent('Email');
    expect(container).toHaveTextContent('Password');
  });
});
