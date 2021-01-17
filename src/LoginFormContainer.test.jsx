import React from 'react';

import { MemoryRouter } from 'react-router-dom';

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
        email: 'test@test',
        password: '1234'
      },
      accessToken: given.accessToken,
    }))
  })

  function renderLoginFormContainer() {
    return render(
      <MemoryRouter>
        <LoginFormContainer />
      </MemoryRouter>
    )
  }

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOCKEN');

    it('render log out button', () => {
      const { container } = render(<LoginFormContainer />);

      expect(container).toHaveTextContent('Log out');
    });

    it('listens click event', () => {
      const { getByText } = render(<LoginFormContainer />);

      fireEvent.click(getByText('Log out'));

      expect(dispatch).toBeCalledWith({ type: 'logout' });
    });
  });

  context('when logged out', () => {
    given('accessToken', () => '');

    it('renders log in form', () => {
      const { getByLabelText, getByText } = render(<LoginFormContainer />);

      expect(getByLabelText('E-mail')).not.toBeNull();
      expect(getByLabelText('Password')).not.toBeNull();
      expect(getByText('Log In')).not.toBeNull();
    });

    it('listens change events', () => {
      const { getByLabelText } = render(<LoginFormContainer />);

      const controls = [
        {
          label: 'E-mail',
          name: 'email',
          value: 'test',
        },
        {
          label: 'Password',
          name: 'password',
          value: 'test',
        },
      ];

      controls.forEach(({ label, name, value }) => {
        const input = getByLabelText(label);

        fireEvent.change(input, { target: { value } });

        expect(dispatch).toBeCalledWith({
          type: 'changeLoginFields',
          payload: { name, value },
        });
      });
    });

    it('listens click event', () => {
      const { getByText } = render(<LoginFormContainer />);

      fireEvent.click(getByText('Log In'));

      expect(dispatch).toBeCalled();
    });
  });
});