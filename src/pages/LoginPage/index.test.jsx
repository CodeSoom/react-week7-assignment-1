import { useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import LoginPage from '.';

jest.mock('react-redux');

useSelector.mockImplementation((selector) => selector({ accessToken: null }));

describe('LoginPage', () => {
  const renderHomePage = () => render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>,
  );

  it('renders title', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Log In');
  });
});
