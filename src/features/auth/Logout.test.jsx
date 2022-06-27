import { render } from '@testing-library/react';

import Logout from './Logout';

test('Logout', () => {
  const { getByRole } = render((
    <Logout />
  ));

  expect(getByRole('button')).toHaveTextContent('Log out');
});
