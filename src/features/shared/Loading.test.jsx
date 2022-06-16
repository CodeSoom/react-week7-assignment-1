import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Loading from './Loading';

test('Loading', () => {
  const { container } = render((
    <MemoryRouter>
      <Loading />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('로딩중...');
});
