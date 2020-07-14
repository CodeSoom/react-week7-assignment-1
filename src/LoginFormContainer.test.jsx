import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

import loginFields from '../fixtures/loginFields';

jest.mock('react-redux');

function renderLoginFormContainer() {
  return render(
    <LoginFormContainer />,
  );
}
describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      loginFields,
    }));
  });

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('E-mail').value).toBe(loginFields.email);
    expect(getByLabelText('Password').value).toBe(loginFields.password);
  });

  context('when changes value', () => {
    it('call dispatch', () => {
      const { getByLabelText } = renderLoginFormContainer();

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: 'tester@exmaple.com' },
      });

      expect(dispatch).toBeCalled();
    });
  });

  it('renders submit button', () => {
    const { getByText } = renderLoginFormContainer();

    expect(getByText('Log In')).not.toBeNull();
  });
});
