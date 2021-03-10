import React from 'react';

export default function Buttons({ buttons, handleClick, selected }) {
  return (
    <ul>
      {buttons.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => handleClick(id)}
          >
            {name}
            {selected ? (
              <>
                {id === selected.id ? '(V)' : null}
              </>
            ) : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
