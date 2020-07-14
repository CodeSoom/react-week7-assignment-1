import React from 'react';

import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

test('NotFoundPage', () => {
  const { queryByText } = render((
    <NotFoundPage />
  ));

  expect(queryByText('404 Not Found')).not.toBeNull();
});
