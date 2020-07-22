import React from 'react';

import { render } from '@testing-library/react';

import ReviewList from './ReviewList';

import ITEMS from '../../fixtures/items';

describe('<ReviewList />', () => {
  const renderComponent = ({ items }) => render((
    <ReviewList items={items} />
  ));

  context('with items', () => {
    it('display list', () => {
      const { getByRole, getAllByRole } = renderComponent({ items: ITEMS });
      expect(getByRole('list').children).toHaveLength(ITEMS.length);
      expect(getAllByRole('listitem')).toHaveLength(ITEMS.length);
    });
  });

  context('without items', () => {
    it('display empty list', () => {
      const { getByRole } = renderComponent({ items: [] });
      expect(getByRole('list').children).toHaveLength(0);
    });
  });
});
