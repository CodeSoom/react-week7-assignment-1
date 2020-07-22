import React from 'react';

import { Link } from 'react-router-dom';

export default function LinkList({ listId = 'linkList', items }) {
  return (
    <ul id={listId}>
      {
        items.map((item) => (
          <li key={item.id}>
            <Link to={item.link}>
              {item.name}
            </Link>
          </li>
        ))
      }
    </ul>
  );
}
