import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import LoginContainer from './LoginContainer';

jest.mock('react-redux');

describe('LoginContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders email input', () => {
    const { queryByLabelText } = render(<LoginContainer />);

    expect(queryByLabelText('E-mail')).not.toBeNull();
  });

  it('renders password input', () => {
    const { queryByLabelText } = render(<LoginContainer />);

    expect(queryByLabelText('Password')).not.toBeNull();
  });

  it('listens change event', () => {
    const { queryByLabelText } = render(<LoginContainer />);

    const controls = [{
      label: 'E-mail',
      name: 'email',
      value: 'test@email.com',
    }, {
      label: 'Password',
      name: 'password',
      value: '1234',
    }];

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(queryByLabelText(label), {
        target: {
          value,
        },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeLoginFields',
        payload: {
          value,
          name,
        },
      });
    });
  });

  it('renders "Log In" button', () => {
    const { queryByText } = render(<LoginContainer />);

    expect(queryByText('Log In')).not.toBeNull();
  });
});
