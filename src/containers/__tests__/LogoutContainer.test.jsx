import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import LogoutContainer from '@containers/LogoutContainer';

describe('LogoutContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });
  it('delete accessToken', () => {
    const { getByRole } = render(
      <LogoutContainer />,
    );

    fireEvent.click(getByRole('button', { name: 'Log out' }));

    expect(dispatch).toHaveBeenCalledWith({ type: 'deleteAccessToken' });
  });
});
