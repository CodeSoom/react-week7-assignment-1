import React from 'react';

import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

import RESTAURANT from '../../fixtures/restaurant';

describe('<Restaurant />', () => {
  const renderComponent = ({ restaurant }) => render((
    <Restaurant restaurant={restaurant} />
  ));

  context('with restaurant', () => {
    it('display Restaurant Info', () => {
      const { container } = renderComponent({ restaurant: RESTAURANT });
      expect(container).toHaveTextContent(RESTAURANT.name);
      expect(container).toHaveTextContent(RESTAURANT.address);
      expect(container).toHaveTextContent(RESTAURANT.menuItems[0].name);
      expect(container).toHaveTextContent(RESTAURANT.reviews[0].name);
      expect(container).toHaveTextContent(RESTAURANT.reviews[0].score);
      expect(container).toHaveTextContent(RESTAURANT.reviews[0].description);
    });
  });

  context('without restaurant', () => {
    it('display No Restaurant Info', () => {
      const { container } = renderComponent({ restaurant: undefined });
      expect(container).toHaveTextContent('no-restaurant-info');
    });
  });
});
