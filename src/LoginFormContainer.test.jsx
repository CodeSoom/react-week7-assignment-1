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
      loginFields: {
        email: 'tester@example.com',
        password: 'test',
      },
    }));
  });

  describe('LoginForm', () => {
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

    it('listens click event', () => {
      const { getByText } = render(<LoginFormContainer />);

      fireEvent.click(getByText('Log in'));

      expect(dispatch).toBeCalled();
    });
  });

  describe('LogoutForm', () => {
    it('renders logout button', () => {
      const { container } = render(<LoginFormContainer />);

      expect(container).toHaveTextContent('Log out');
    });
  });
});
