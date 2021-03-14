import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import given from 'given2';

import LogInContainer from './LogInContainer';

describe('LogInContainer', () => {
  const renderLogInContainer = () => render(<LogInContainer />);

  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      accessToken: given.accessToken,
    }));
  });

  it('excutes dispatch upon submission', async () => {
    renderLogInContainer();

    fireEvent.input(screen.getByRole('textbox', {
      name: 'E-Mail',
    }), {
      target: {
        value: 'test@mail.com',
      },
    });

    fireEvent.input(screen.getByLabelText('Password'), {
      target: {
        value: 'password',
      },
    });

    await waitFor(() => fireEvent.submit(screen.getByRole('button', {
      name: 'Log In',
    })));

    expect(dispatch).toBeCalled();
  });

  it('calls dispatch upon clicking log out', () => {
    given('accessToken', () => '123123');

    renderLogInContainer();

    fireEvent.click(screen.getByRole('button', {
      name: 'Log out',
    }));

    expect(dispatch).toBeCalled();
  });
});
