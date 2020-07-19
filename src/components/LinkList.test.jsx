import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import LinkList from './LinkList';

import LINKS from '../../fixtures/links';

describe('<LinkList />', () => {
  const renderComponent = ({ links }) => render((
    <MemoryRouter>
      <LinkList items={links} />
    </MemoryRouter>
  ));

  context('with items', () => {
    it('display list', () => {
      const { getByRole, getAllByRole } = renderComponent({ links: LINKS });
      expect(getByRole('list').children).toHaveLength(LINKS.length);
      expect(getAllByRole('listitem')).toHaveLength(LINKS.length);
    });
  });

  context('without items', () => {
    it('display empty list', () => {
      const { getByRole } = renderComponent({ links: [] });
      expect(getByRole('list').children).toHaveLength(0);
    });
  });
});
