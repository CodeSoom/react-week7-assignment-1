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

  it('renders "Log In" button', () => {
    const { queryByText } = render(<LoginContainer />);

    expect(queryByText('Log In')).not.toBeNull();
  });

  it('listens email input change event', () => {
    const { queryByLabelText } = render(<LoginContainer />);

    fireEvent.change(queryByLabelText('E-mail'), {
      target: {
        value: 'test@email.com',
      },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeLoginFields',
      payload: {
        value: 'test@email.com',
        name: 'email',
      },
    });
  });
});
