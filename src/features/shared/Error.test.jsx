import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Error from './Error';

test('Error', () => {
  const { container } = render((
    <MemoryRouter>
      <Error errorMessage="에러발생" />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('에러: 에러발생');
});
