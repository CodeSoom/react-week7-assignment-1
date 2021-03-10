import React from 'react';

import { render } from '@testing-library/react';

import List from '@components/List';

describe('List', () => {
  const menuItems = [{ id: 1, name: '공기밥' }];

  function renderList(list) {
    return render((
      <List
        title="메뉴"
        list={list}
      />
    ));
  }

  context('with list', () => {
    it('renders list', () => {
      const { getByRole } = renderList(menuItems);

      expect(getByRole('heading', { name: '메뉴' })).toBeInTheDocument();

      menuItems.forEach((menuItem) => {
        expect(getByRole('list')).toHaveTextContent(menuItem.name);
      });
    });
  });

  context('without list', () => {
    it('renders "메뉴가 없어요!" ', () => {
      const { getByText } = renderList([]);

      expect(getByText('메뉴가 없어요!')).toBeInTheDocument();
    });
  });
});
