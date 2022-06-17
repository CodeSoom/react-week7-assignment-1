import { render } from '@testing-library/react';

import Loading from './Loading';

test('Loading', () => {
  const { container } = render(<Loading />);

  expect(container).toHaveTextContent('로딩중...');
});
