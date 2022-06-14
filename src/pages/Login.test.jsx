import { render } from '@testing-library/react';

import Login from './Login';

test('Login', () => {
  const { container } = render((
    <Login />
  ));

  expect(container).toHaveTextContent('Login');
});
