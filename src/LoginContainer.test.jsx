import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import LoginContainer from './LoginContainer';

import LOGIN_FIELDS from '../fixtures/loginFields';

jest.mock('react-redux');

describe('LoginContainer', () => {
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

  const { email: EMAIL, password: PASSWORD } = LOGIN_FIELDS;

  context('when logged out', () => {
    it('renders email input', () => {
      const { queryByLabelText } = render(<LoginContainer />);

      expect(queryByLabelText('E-mail')).not.toBeNull();
    });

    it('renders password input', () => {
      const { queryByLabelText } = render(<LoginContainer />);

      expect(queryByLabelText('Password')).not.toBeNull();
    });

    it('listens change event', () => {
      const { getByLabelText } = render(<LoginContainer />);

      const controls = [{
        label: 'E-mail',
        name: 'email',
        value: EMAIL,
      }, {
        label: 'Password',
        name: 'password',
        value: PASSWORD,
      }];

      controls.forEach(({ label, name, value }) => {
        fireEvent.change(getByLabelText(label), {
          target: {
            value,
          },
        });

        expect(dispatch).toBeCalledWith({
          type: 'changeLoginFields',
          payload: {
            name,
            value,
          },
        });
      });
    });

    it('renders "Log In" button', () => {
      const { queryByText } = render(<LoginContainer />);

      expect(queryByText('Log In')).not.toBeNull();
    });

    it('listens "Log In" button click event', () => {
      const { getByText } = render(<LoginContainer />);

      fireEvent.submit(getByText('Log In'));

      expect(dispatch).toBeCalled();
    });
  });
});
