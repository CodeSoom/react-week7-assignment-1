import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  const renderHomePage = () => render(<LoginFormContainer />);

  it('render user name and password ', () => {
    const { getByLabelText } = renderHomePage();

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('renders login button', () => {
    const { getByText } = renderHomePage();

    expect(getByText('Login')).not.toBeNull();

    fireEvent.click(getByText('Login'));

    expect(dispatch).toBeCalled();
  });
});
