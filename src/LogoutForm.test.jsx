import React from 'react';

import { render } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  it('renders "log out" button', () => {
    const handleClick = jest.fn();
    const { container } = render((<LogoutForm onClick={handleClick} />));

    expect(container).toHaveTextContent('Log out');
  });
});
