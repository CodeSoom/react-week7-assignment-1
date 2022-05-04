import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  it('renders input controls', () => {
    const { getByLabelText } = render(
      <MemoryRouter initialEntries={['/login']}>
        <LoginFormContainer />
      </MemoryRouter>,
    );

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
