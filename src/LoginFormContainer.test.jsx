import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test',
        password: '1234',
      },
    }));
  });

  describe('inputs', () => {
    it('renders input controls', () => {
      const { getByLabelText } = render(
        <LoginFormContainer />,
      );

      expect(getByLabelText('E-mail').value).toBe('test@test');
      expect(getByLabelText('Password').value).toBe('1234');
    });

    context('when typed in', () => {
      it('calls change fields dispatch', () => {
        const { getByLabelText } = render(
          <LoginFormContainer />,
        );

        fireEvent.change(getByLabelText('E-mail'), { target: { value: 'new test@test' } });

        expect(dispatch).toBeCalledWith({
          type: 'changeLoginField',
          payload: { name: 'email', value: 'new test@test' },
        });
      });
    });
  });

  describe('"Log in"button', () => {
    it('renders "Log in" button', () => {
      const { getByText } = render(
        <LoginFormContainer />,
      );

      expect(getByText('Log In')).not.toBeNull();
    });

    context('when clicked', () => {
      it('calls request login dispatch', () => {
        const { getByText } = render(
          <LoginFormContainer />,
        );

        fireEvent.click(getByText('Log In'));

        expect(dispatch).toBeCalled();
      });
    });
  });
});
