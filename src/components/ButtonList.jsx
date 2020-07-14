import React from 'react';

export default function ButtonList({
  listId = 'button-list', items, selectedItem, onClick,
}) {
  return (
    <ul id={listId}>
      {
        items.map(({ id, name }) => (
          <li key={id}>
            <button type="button" onClick={() => onClick(id)}>
              {name}
              {(selectedItem && id === selectedItem.id) && '(V)'}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
