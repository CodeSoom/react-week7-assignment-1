import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  useSelector.mockImplementation((selector) => selector({
    loginFields: {
      email: '',
      password: '',
    },
  }));

  it('renders title', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('Log In');
  });
});
