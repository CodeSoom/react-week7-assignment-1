import React from 'react';

export default function List({ title, list }) {
  if (!(list || []).length) {
    return (
      <p>{`${title}가 없어요!`}</p>
    );
  }
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {list.map(({ id, name }) => (
          <li key={id}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
