import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

import LINKS from '../../fixtures/items';

describe('<List />', () => {
  const renderComponent = (restaurants) => render((
    <List items={restaurants} />
  ));

  context('with items', () => {
    it('display list', () => {
      const { getByRole, getAllByRole } = renderComponent(LINKS);
      expect(getByRole('list').children).toHaveLength(LINKS.length);
      expect(getAllByRole('listitem')).toHaveLength(LINKS.length);
    });
  });

  context('without items', () => {
    it('display empty list', () => {
      const { getByRole } = renderComponent([]);
      expect(getByRole('list').children).toHaveLength(0);
    });
  });
});
