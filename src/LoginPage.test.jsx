import { MemoryRouter } from 'react-router-dom';

import { fireEvent, render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  const handleClick = jest.fn();

  const renderLoginPage = () => render(
    <MemoryRouter initialEntries={['/login']}>
      <LoginPage onClick={handleClick} />
    </MemoryRouter>,
  );

  it('renders title', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('Log In');
  });

  it('renders login form', () => {
    const { queryByLabelText } = renderLoginPage();

    expect(queryByLabelText('E-mail')).not.toBeNull();
    expect(queryByLabelText('Password')).not.toBeNull();
  });

  it('renders login button', () => {
    const { getByText } = renderLoginPage();

    fireEvent.click(getByText('login'));

    expect(handleClick).toBeCalled();
  });
});
