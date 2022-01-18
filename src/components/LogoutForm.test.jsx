import { fireEvent, render } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  const onClick = jest.fn();

  const rendersLogoutForm = () => (render((
    <LogoutForm
      onClick={onClick}
    />
  )));

  it('renders "Log out" button', () => {
    const { getByRole } = rendersLogoutForm();

    expect(getByRole('button', { name: 'Log out' })).not.toBeNull();
  });

  it('"Log out" button calls onClick', () => {
    const { getByRole } = rendersLogoutForm();

    fireEvent.click(getByRole('button', { name: 'Log out' }));

    expect(onClick).toBeCalled();
  });
});
