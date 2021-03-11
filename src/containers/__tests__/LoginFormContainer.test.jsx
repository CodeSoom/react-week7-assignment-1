import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import given from 'given2';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from '@containers/LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      loginFields: { email: '123@naver.com', password: '5678' },
      accessToken: given.accessToken,
    }));
  });

  context('when logged out', () => {
    given('accessToken', () => null);

    it('changes input fields value', () => {
      const { getByLabelText } = render(<LoginFormContainer />);

      const reviewInputs = [
        {
          label: 'email', originalValue: '123@naver.com', changedValue: 'tester@example.com',
        },
        {
          label: 'password', originalValue: '5678', changedValue: 'test',
        },
      ];

      reviewInputs.forEach(({ label, originalValue, changedValue }) => {
        const input = getByLabelText(label);

        expect(input.value).toBe(originalValue);
        fireEvent.change(input, { target: { value: changedValue } });

        expect(dispatch).toHaveBeenCalledWith({
          type: 'changeLoginFields',
          payload: { name: label, value: changedValue },
        });
      });
    });

    it('submits input fields values', () => {
      const { getByRole } = render(<LoginFormContainer />);

      fireEvent.click(getByRole('button', { name: 'Log In' }));

      expect(dispatch).toHaveBeenCalled();
    });
  });

  context('when logged in ', () => {
    given('accessToken', () => '12346578');

    it('deletes accessToken', () => {
      const { getByRole } = render(<LoginFormContainer />);

      const logoutButton = getByRole('button', { name: 'Log out' });

      expect(logoutButton).toBeInTheDocument();

      fireEvent.click(logoutButton);

      expect(dispatch).toHaveBeenCalledWith({ type: 'deleteAccessToken' });
    });
  });
});
