import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  jest.mock('react-redux');
  useSelector.mockImplementation((selector) => selector({
    loginFields: {
      id: '',
      password: '',
    },
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders title', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('Log In');
  });
});
