import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import LoginPage from './LoginPage';

jest.mock('react-redux');

describe('LoginPage', () => {
  beforeAll(() => {
    useSelector.mockImplementation((selector) => selector({
      form: {
        email: 'email',
        password: 'password',
      },
    }));
  });

  it('renders title', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('LogIn');
  });

  it('renders login form', () => {
    const { getAllByRole } = render(<LoginPage />);

    expect(getAllByRole('textbox')).not.toHaveLength(0);
  });
});
