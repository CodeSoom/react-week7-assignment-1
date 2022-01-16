import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import LoginContainer from './LoginContainer';

jest.mock('react-redux');

describe('LoginContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  context('without authorizedToken', () => {
    beforeEach(() => {
      useSelector.mockImplementation(() => ({
        loginField: {
          email: '',
          password: '',
        },
        authorizedToken: '',
      }));

      useDispatch.mockImplementation(() => dispatch);
    });

    it('renders inputs and submit button', () => {
      const { getByLabelText, getByRole } = render(<LoginContainer />);

      expect(getByLabelText('E-mail')).not.toBeNull();
      expect(getByLabelText('Password')).not.toBeNull();
      expect(getByRole('button', { name: 'Log in' })).not.toBeNull();
    });

    it('when change inputs dispatch called', () => {
      const { getByLabelText } = render(<LoginContainer />);
      fireEvent.change(getByLabelText('E-mail'), { target: { value: 'test' } });

      expect(dispatch).toBeCalled();
    });

    it('when submit form dispatch called', () => {
      const { getByRole } = render(<LoginContainer />);
      fireEvent.click(getByRole('button', { name: 'Log in' }));

      expect(dispatch).toBeCalled();
    });
  });

  context('with authorizedToken', () => {
    beforeEach(() => {
      useSelector.mockImplementation(() => ({
        loginField: {
          email: '',
          password: '',
        },
        authorizedToken: 'TOKEN',
      }));

      useDispatch.mockImplementation(() => dispatch);
    });
  });
});
