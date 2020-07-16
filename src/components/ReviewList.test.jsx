import React from 'react';

import { render } from '@testing-library/react';

import ReviewList from './ReviewList';

import LINKS from '../../fixtures/items';

describe('<ReviewList />', () => {
  const renderComponent = (restaurants) => render((
    <ReviewList items={restaurants} />
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
