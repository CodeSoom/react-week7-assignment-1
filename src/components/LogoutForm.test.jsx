import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  const handleSubmit = jest.fn();

  function renderLogoutForm() {
    return render(
      <LogoutForm
        onSubmit={handleSubmit}
      />,
    );
  }

  beforeEach(() => {
    handleSubmit.mockClear();
  });

  context('renders LogoutForm', () => {
    const { container } = renderLogoutForm();

    expect(container.querySelector('button')).toHaveTextContent('Log Out');
  });

  context('when click logout button', () => {
    it('called logout button click event', () => {
      const { container } = renderLogoutForm();

      fireEvent.click(container.querySelector('button'));

      expect(handleSubmit).toBeCalled();
    });
  });
});
