import React from 'react';

import { useDispatch } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders input-controls', () => {
    const { queryByLabelText, getByLabelText } = render(
      <LoginFormContainer />,
    );

    expect(queryByLabelText('E-mail')).not.toBeNull();

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: 'tester@example.com' },
    });

    expect(dispatch).toBeCalled();
  });

  it('renders "Log In" button', () => {
    const { queryByText, getByText } = render(
      <LoginFormContainer />,
    );

    expect(queryByText('Log In')).not.toBeNull();

    fireEvent.click(getByText('Log In'));

    expect(dispatch).toBeCalled();
  });
});
