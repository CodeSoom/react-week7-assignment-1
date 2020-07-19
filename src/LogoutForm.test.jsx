import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  it('renders logout button', () => {
    const { container } = render((
      <LogoutForm
        onClick={handleClick}
      />
    ));

    expect(container).toHaveTextContent('Logout');
  });

  it('listens logout click event', () => {
    const { getByText } = render((
      <LogoutForm
        onClick={handleClick}
      />
    ));

    fireEvent.click(getByText('Logout'));

    expect(handleClick).toBeCalled();
  });
});
