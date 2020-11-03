import React from 'react';

import { render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const renderHomePage = () => render(<LoginFormContainer />);

  it('renders title', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Form');
  });
});
