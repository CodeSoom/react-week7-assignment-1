import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: '',
        password: '',
      },
    }));
  });

  context('when change inputs', () => {
    it('change email input', () => {
      const { getByLabelText } = render(<LoginFormContainer />);

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: 'newEmail' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeLoginField',
        payload: { name: 'email', value: 'newEmail' },
      });
    });

    it('change password input', () => {
      const { getByLabelText } = render(<LoginFormContainer />);

      fireEvent.change(getByLabelText('Password'), {
        target: { value: 'newPassword' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeLoginField',
        payload: { name: 'password', value: 'newPassword' },
      });
    });
  });

  // it('click [Login] button ', () => {
  //   expect(queryByRole('button', { name: 'LogIn' })).toBeInTheDocument();
  // });
});
