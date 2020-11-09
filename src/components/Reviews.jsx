import React from 'react';

export default function Reviews({ reviews = [] }) {
  return (
    <ul>
      {
        reviews
          .sort((a, b) => a.id - b.id)
          .map(({
            id, name, score, description,
          }) => {
            const fixedScore = score > 5 ? 5 : score;

            return (
              <li
                key={id}
              >
                <p>{`닉네임 : ${name}`}</p>
                <p>
                  {`점수 : ${'★'.repeat(fixedScore)}${'☆'.repeat(5 - fixedScore)}`}
                </p>
                <p>{`평가 : ${description}`}</p>
              </li>
            );
          })
      }
    </ul>
  );
}
