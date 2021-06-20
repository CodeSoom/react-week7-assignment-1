import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import LoginPage from './LoginPage';

jest.mock('react-redux');

describe('LoginPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      form: {
        email: 'email@email.com',
        password: 'paXXword',
      },
    }));
  });

  it('renders title', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('LogIn');
  });
});
