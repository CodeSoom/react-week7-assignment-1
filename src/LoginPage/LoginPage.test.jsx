import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import LoginPage from './LoginPage';

import loginFields from '../../fixtures/loginFields';

jest.mock('react-redux');

describe('LoginPage', () => {
  const { email, password } = loginFields;

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: { email, password },
    }));
  });

  it('renders Log-in title', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('Log In');
  });

  it('renders input controls', () => {
    const { queryByLabelText } = render(<LoginPage />);

    expect(queryByLabelText('E-mail')).not.toBeNull();
    expect(queryByLabelText('Password')).not.toBeNull();
  });
});
