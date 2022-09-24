import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

import loginFields from '../../fixtures/loginFields';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      accessToken: given.accessToken,
      loginFields,
    }));
  });

  afterEach(() => {
    dispatch.mockClear();
  });

  context('when logged out', () => {
    given('accessToken', () => '');

    it('renders input controls', () => {
      const { getByLabelText } = render(<LoginFormContainer />);

      expect(getByLabelText('E-mail').value).toBe(loginFields.email);
      expect(getByLabelText('Password').value).toBe(loginFields.password);
    });

    it('listens chage events', () => {
      const { getByLabelText } = render(<LoginFormContainer />);

      const newEmail = 'new email';

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: newEmail },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeLoginField',
        payload: {
          name: 'email',
          value: newEmail,
        },
      });
    });

    it('renders \'Log In\' button to listen to submit event', () => {
      const { getByText } = render(<LoginFormContainer />);

      fireEvent.click(getByText('Log In'));

      expect(dispatch).toBeCalled();
    });
  });

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders \'Log out\' button to listen to click event', () => {
      const { getByText } = render(<LoginFormContainer />);

      fireEvent.click(getByText('Log out'));

      expect(dispatch).toBeCalledWith({ type: 'logout' });
    });
  });
});
