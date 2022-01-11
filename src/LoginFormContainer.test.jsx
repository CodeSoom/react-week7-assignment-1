import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  it('input control들을 렌더링한다.', () => {
    const { getByLabelText } = render((
      <MemoryRouter>
        <LoginFormContainer />
      </MemoryRouter>
    ));

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
