import { MemoryRouter } from 'react-router-dom';

import { fireEvent, render } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  const handleClick = jest.fn();

  const renderLogoutForm = () => render(
    <MemoryRouter initialEntries={['/login']}>
      <LogoutForm
        onClick={handleClick}
      />
    </MemoryRouter>,
  );

  it('renders title', () => {
    const { container } = renderLogoutForm();

    expect(container).toHaveTextContent('Log Out');
  });

  it('listens click event', () => {
    const { getByText } = renderLogoutForm();

    fireEvent.click(getByText('Log out'));
    expect(handleClick).toBeCalled();
  });
});
