import React from 'react';
import {
  act,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import LogInContainer from './LogInContainer';

describe('LogInContainer', () => {
  const renderLogInContainer = () => render(<LogInContainer />);

  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation(() => useSelector({
      accessToken: 'asfjlkasjdf',
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

    expect(dispatch).toBeCalledTimes(2);
  });
});
