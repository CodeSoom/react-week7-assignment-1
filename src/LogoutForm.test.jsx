import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  it('renders Log out button', () => {
    const { getByText } = render((
      <LogoutForm onClick={handleClick} />
    ));

    expect(getByText('Log Out')).not.toBeNull();
  });

  it('listens click event', () => {
    const { getByText } = render((
      <LogoutForm onClick={handleClick} />
    ));

    fireEvent.click(getByText('Log Out'));
    expect(handleClick).toBeCalled();
  });
});
