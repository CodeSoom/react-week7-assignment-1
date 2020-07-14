import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ButtonList from './ButtonList';

import ITEMS from '../../fixtures/items';

describe('<ButtonList />', () => {
  const handleClickItem = jest.fn();

  const renderComponent = (items, selectedItem = null) => render((
    <ButtonList
      items={items}
      selectedItem={selectedItem}
      onClick={handleClickItem}
    />
  ));

  context('without items', () => {
    it('display no buttons', () => {
      const { container } = renderComponent([]);
      const buttons = container.querySelector('#button-list').children;
      expect(buttons.length).toEqual(0);
    });
  });

  context('with items', () => {
    it('display buttons', () => {
      const { container } = renderComponent(ITEMS);
      const buttons = container.querySelector('#button-list').children;
      expect(buttons.length).toEqual(ITEMS.length);
    });

    context('when click button', () => {
      it('fires click event', () => {
        const { getAllByRole } = renderComponent(ITEMS);
        // When
        const buttons = getAllByRole('button');
        buttons.forEach((button) => fireEvent.click(button));
        // Then
        expect(handleClickItem).toBeCalledTimes(ITEMS.length);
      });
    });

    context('when select button', () => {
      it('selected-button contains checked-string', () => {
        const { getAllByRole } = renderComponent(ITEMS, ITEMS[0]);
        // When
        const buttons = getAllByRole('button');
        // Then
        expect(buttons[0].textContent).toBe(`${ITEMS[0].name}(V)`);
      });
    });
  });
});
