import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders', () => {
    const { container } = render(<LoginForm />);

    expect(container).toHaveTextContent('Email');
    expect(container).toHaveTextContent('Password');
  });

  it('renders button', () => {
    const { getByText } = render(<LoginForm />);

    fireEvent.click(getByText('Log In'));

    expect(dispatch).toBeCalled();
  });
});
