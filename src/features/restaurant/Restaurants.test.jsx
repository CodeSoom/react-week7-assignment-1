import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Restaurants from './Restaurants';

test('Restaurants', () => {
  const restaurants = [
    { id: 1, name: '마법사주방' },
  ];

  const { container } = render((
    <MemoryRouter>
      <Restaurants restaurants={restaurants} />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('마법사주방');
});
