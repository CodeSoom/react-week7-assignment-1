import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {},
    }));
  });

  it('renders input-controls', () => {
    const { queryByLabelText, getByLabelText } = render(
      <LoginFormContainer />,
    );

    expect(queryByLabelText('E-mail')).not.toBeNull();

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: 'tester@example.com' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeLoginField',
      payload: {
        name: 'email',
        value: 'tester@example.com',
      },
    });
  });

  it('renders login button', () => {
    const { queryByText, getByText } = render(
      <LoginFormContainer />,
    );

    expect(queryByText('Log In')).not.toBeNull();

    fireEvent.click(getByText('Log In'));

    expect(dispatch).toBeCalled();
  });
});
