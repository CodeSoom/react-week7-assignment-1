import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  act,
  fireEvent,
  render,
  screen,
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
      name: /e-mail/i,
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

    await act(async () => {
      fireEvent.submit(screen.getByRole('button', {
        name: /log in/i,
      }));
    });

    expect(dispatch).toBeCalled();
  });

  it('calls dispatch upon clicking log out', () => {
    given('accessToken', () => '123123');

    renderLogInContainer();

    fireEvent.click(screen.getByRole('button', {
      name: /Log Out/i,
    }));

    expect(dispatch).toBeCalled();
  });
});
