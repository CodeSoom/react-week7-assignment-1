import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import LoginFormContainer from '@containers/LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });
  it('change input fields value', () => {
    const { getByLabelText } = render(
      <LoginFormContainer />,
    );

    const emailInput = getByLabelText('email');
    const passwordInput = getByLabelText('password');

    fireEvent.change(emailInput, { target: { value: 'tester@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'test' } });

    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
