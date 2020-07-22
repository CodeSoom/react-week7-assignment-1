import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

import ITEMS from '../../fixtures/items';

describe('<List />', () => {
  const renderComponent = ({ items }) => render((
    <List items={items} />
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
