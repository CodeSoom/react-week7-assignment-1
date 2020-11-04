import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  const renderLoginFormContainer = () => render(
    <LoginFormContainer />,
  );

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginField: {
        email: 'tester@example.com',
        password: 'tester',
      },
    }));
  });

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('password')).not.toBeNull();
  });

  it('renders login button', () => {
    const { container } = renderLoginFormContainer();

    expect(container).toHaveTextContent('Log In');
  });

  context('when login button is clicked', () => {
    it('calls dispatch', () => {
      const { getByText } = renderLoginFormContainer();

      fireEvent.click(getByText('Log In'));

      expect(dispatch).toBeCalled();
    });
  });

  context('when input controls is changed', () => {
    it('calls dispatch', () => {
      const inputs = [
        { label: 'E-mail', value: 'test@test.com' },
        { label: 'password', value: '1234' },
      ];

      const { getByLabelText } = renderLoginFormContainer();

      inputs.forEach(({ label, value }) => {
        const input = getByLabelText(label);

        fireEvent.change(input, {
          target: { value },
        });
      });

      expect(dispatch).toBeCalledTimes(inputs.length);
    });
  });
});
