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
        email: 'tester',
        password: '',
      },
      accessToken: given.accessToken,
    }));
  });

  const renderLoginFormContainer = () => render(
    <LoginFormContainer />,
  );

  context('without Log In', () => {
    it('renders input fields', () => {
      const { getByLabelText } = renderLoginFormContainer();

      expect(getByLabelText('E-mail')).not.toBeNull();
      expect(getByLabelText('Password')).not.toBeNull();
    });

    it('renders Log In button', () => {
      const { getByText } = renderLoginFormContainer();

      expect(getByText('Log In')).not.toBeNull();
    });

    it('when click Log In button dispatch action', () => {
      const { getByText } = renderLoginFormContainer();

      fireEvent.click(getByText('Log In'));

      expect(dispatch).toBeCalled();
    });

    it('when change input fields dispatch action', () => {
      const { getByDisplayValue } = renderLoginFormContainer();

      fireEvent.change(getByDisplayValue('tester'), {
        target: { value: 'tester@example.com' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeLoginFields',
        payload: {
          name: 'email',
          value: 'tester@example.com',
        },
      });
    });
  });

  context('with Log In', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders "Log out" button', () => {
      const { container } = renderLoginFormContainer();

      expect(container).toHaveTextContent('Log out');
    });
  });
});
