import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');
describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'tester@example.com',
        password: 'test',
      },
    }));
  });

  const renderLoginPage = () => render(<LoginFormContainer />);

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginPage();

    expect(getByLabelText('E-mail').value).toBe('tester@example.com');
    expect(getByLabelText('Password').value).toBe('test');
  });

  it('renders "Log In" button', () => {
    const { getByText } = renderLoginPage();

    fireEvent.click(getByText('Log In'));
  });
});
