import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

function renderLoginFormContainer() {
  return render(
    <LoginFormContainer />,
  );
}
describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    dispatch.mockImplementation(() => dispatch);
  });

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  context('when changes value', () => {
    it('call dispatch', () => {
      const { getByLabelText } = renderLoginFormContainer();

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: 'tester@exmaple.com' },
      });

      expect(dispatch).toBeCalled();
    });
  });

  it('renders submit button', () => {
    const { getByText } = renderLoginFormContainer();

    expect(getByText('Log In')).not.toBeNull();
  });
});
