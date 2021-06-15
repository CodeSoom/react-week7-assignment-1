import { fireEvent, render } from '@testing-library/react';
import given from 'given2';
import { useDispatch, useSelector } from 'react-redux';

import { setAccessToken, setForm } from './actions';
import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeAll(() => {
    useDispatch.mockReturnValue(dispatch);
  });

  beforeEach(() => {
    dispatch.mockClear();

    useSelector.mockImplementation((selector) => selector({
      form: {
        email: 'email',
        password: 'password',
      },
      accessToken: given.accessToken,
    }));
  });

  it('listens change events', () => {
    const { getByRole } = render(<LoginFormContainer />);

    const controls = [
      { name: 'email', value: 'testing@test.com' },
      { name: 'password', value: 'test' },
    ];

    controls.forEach(({ name, value }) => {
      const input = getByRole('textbox', { name });

      fireEvent.change(input, { target: { value } });

      expect(dispatch).toBeCalledWith(setForm({ name, value }));
    });
  });

  context('when logged in', () => {
    given('accessToken', () => 'TOKEN');

    it('renders button for log out', () => {
      const { getByRole } = render(<LoginFormContainer />);
      fireEvent.click(getByRole('button', { name: 'Log out' }));

      expect(dispatch).toBeCalledWith(setAccessToken(null));
    });
  });

  context('when not logged in', () => {
    given('accessToken', () => null);

    it('renders button for log in', () => {
      const { getByRole } = render(<LoginFormContainer />);
      fireEvent.click(getByRole('button', { name: 'Log In' }));

      expect(dispatch).toBeCalled();
    });
  });
});
