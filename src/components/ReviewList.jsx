import React from 'react';

export default function ReviewList({ listId = 'reviewList', items }) {
  return (
    <ul id={listId}>
      {
        items.map((item) => (
          <li key={item.id}>
            {item.name}
            <br/>
            {item.score}
            <br/>
            {item.description}
          </li>
        ))
      }
    </ul>
  );
}
