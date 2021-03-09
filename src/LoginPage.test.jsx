import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  })

  it('renders log-in title', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('Log In');
  });

  it('renders log-in form', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('E-mail');
    expect(container).toHaveTextContent('Password');
  });

  it('renders log-in button', () => {
    const { getByText } = render(<LoginPage />);

    fireEvent.click(getByText('Log-In'));

    expect(dispatch).toBeCalled();
  })
});
