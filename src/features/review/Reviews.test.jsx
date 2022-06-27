import { render } from '@testing-library/react';

import Reviews from './Reviews';

import reviews from '../../../fixtures/reviews';

test('Reviews', () => {
  const { container } = render(<Reviews reviews={reviews} />);

  expect(container).toHaveTextContent('누군가가 테스트하고 있나보네요 ㅋㅋㅋㅋ');
});
