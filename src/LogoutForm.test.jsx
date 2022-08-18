import { render } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  const handleClick = jest.fn();

  function renderLogoutForm() {
    return render((
      <LogoutForm
        onClick={handleClick}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('when logged in', () => {
    it('renders login fields', () => {
      const { queryByLabelText } = renderLogoutForm();

      expect(queryByLabelText('E-mail')).toBeNull();
      expect(queryByLabelText('Password')).toBeNull();
    });

    it('shows "log out" button', () => {
      const { queryByText } = renderLogoutForm();

      expect(queryByText('Log out')).not.toBeNull();
    });
  });
});
