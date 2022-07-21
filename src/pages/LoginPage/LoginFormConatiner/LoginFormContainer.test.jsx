import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { changeLoginField, setAccessToken } from '@/store/actions';
import { requestLogin } from '@/store/async-actions';

import LoginFormContainer from './LoginFormContainer';

jest.mock('@/store/async-actions');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockReturnValue(dispatch);

  const mockSelector = ({ accessToken }) => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: '',
        password: '',
      },
      accessToken,
    }));
  };

  const renderLoginFormContainer = () => render((
    <LoginFormContainer />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('when logged out', () => {
    beforeEach(() => {
      mockSelector({ accessToken: '' });
    });

    it('renders inputs', () => {
      const { getByLabelText } = renderLoginFormContainer();

      const labels = ['E-mail', 'Password'];

      labels.forEach((label) => {
        expect(getByLabelText(label)).toBeInTheDocument();
      });
    });

    it('dispatches changeLoginField when inputs are changed', () => {
      const { getByLabelText } = renderLoginFormContainer();

      const inputs = [
        { label: 'E-mail', name: 'email', value: 'abc@test.com' },
        { label: 'Password', name: 'password', value: 'password123' },
      ];

      inputs.forEach(({ label, name, value }) => {
        fireEvent.change(getByLabelText(label), { target: { value } });

        expect(dispatch).toBeCalledWith(changeLoginField({ name, value }));
      });
    });

    it('renders login button', () => {
      const { getByRole } = renderLoginFormContainer();

      expect(getByRole('button', { name: 'Log In' })).toBeInTheDocument();
    });

    it('dispatches requestLogin when button is clicked', () => {
      const { getByRole } = renderLoginFormContainer();

      fireEvent.click(getByRole('button', { name: 'Log In' }));

      expect(dispatch).toBeCalledWith(requestLogin());
    });
  });

  context('when logged in', () => {
    beforeEach(() => {
      mockSelector({ accessToken: 'ACCESS_TOKEN' });
    });

    it('renders logout button', () => {
      const { getByRole } = renderLoginFormContainer();

      fireEvent.click(getByRole('button', { name: 'Log out' }));

      expect(dispatch).toBeCalledWith(setAccessToken(''));
    });
  });
});
