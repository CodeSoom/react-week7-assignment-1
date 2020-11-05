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

  context('when inputs change', () => {
    it('change inputs', () => {
      const { getByLabelText } = render(<LoginFormContainer />);

      const controls = [
        { label: 'E-mail', name: 'email', value: 'newEmail' },
        { label: 'Password', name: 'password', value: 'newPassword' },
      ];

      controls.forEach((control) => {
        const { label, name, value } = control;
        fireEvent.change(getByLabelText(label), {
          target: { value },
        });

        expect(dispatch).toBeCalledWith({
          type: 'changeLoginField',
          payload: { name, value },
        });
      });
    });
  });

  context('when "로그인" button clicked', () => {
    it('occurs login dispatch', () => {
      const { getByText } = render(<LoginFormContainer />);

      fireEvent.click(getByText('로그인'));

      expect(dispatch).toBeCalled();
    });
  });
});
