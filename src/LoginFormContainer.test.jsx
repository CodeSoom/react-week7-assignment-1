import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    handleChange.mockClear();
    handleSubmit.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  const renderLoginFormContainer = () => render(
    <LoginFormContainer
      onChange={handleChange}
      onSubmit={handleSubmit}
    />,
  );

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('password')).not.toBeNull();
  });

  it('renders "Log In" button', () => {
    const { container } = renderLoginFormContainer();

    expect(container).toHaveTextContent('Log In');
  });

  context('when "Log In" button is clicked', () => {
    it('called dispatch', () => {
      const { getByText } = renderLoginFormContainer();

      fireEvent.click(getByText('Log In'));

      expect(dispatch).toBeCalled();
    });
  });
});
