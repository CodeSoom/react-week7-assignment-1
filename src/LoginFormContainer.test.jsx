import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      accessToken: given.accessToken,
      loginFields: {
        email: 'tester@example.com',
        password: 'test',
      },
    }));
  });

  describe('LoginForm', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders input controls', () => {
      const { container } = render(<LoginFormContainer />);

      expect(container).toHaveTextContent('E-mail');
      expect(container).toHaveTextContent('Password');
    });

    it('renders login button', () => {
      const { queryByText } = render(<LoginFormContainer />);

      expect(queryByText('Log in')).not.toBeNull();
    });

    it('changes E-mail Field', () => {
      const { getByLabelText } = render(<LoginFormContainer />);

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: 'newtester@example.com' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeLoginField',
        payload: { name: 'email', value: 'newtester@example.com' },
      });
    });

    it('changes Password Fields', () => {
      const { getByLabelText } = render(<LoginFormContainer />);

      fireEvent.change(getByLabelText('Password'), {
        target: { value: 'newtest' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeLoginField',
        payload: { name: 'password', value: 'newtest' },
      });
    });

    it('listens login click event', () => {
      const { getByText } = render(<LoginFormContainer />);

      fireEvent.click(getByText('Log in'));

      expect(dispatch).toBeCalled();
    });
  });

  describe('LogoutForm', () => {
    given('accessToken', () => '');

    it('renders logout button', () => {
      const { queryByText } = render(<LoginFormContainer />);

      expect(queryByText('Log out')).not.toBeNull();
    });
  });

  it('listens logout click event', () => {
    const { getByText } = render(<LoginFormContainer />);

    fireEvent.click(getByText('Log out'));

    expect(dispatch).toBeCalled();
  });
});
