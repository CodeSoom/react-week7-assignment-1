import React from 'react';

export default function Reviews({ reviews }) {
  // if (!(reviews || []).length) {
  //   return (
  //     <p>메뉴가 없어요!</p>
  //   );
  // }

  return (
    <ul>
      {reviews.map(({
        id, name, score, description,
      }) => (
        <li key={id}>
          {`${name}\n${score}점\n${description}`}
        </li>
      ))}
    </ul>
  );
}
