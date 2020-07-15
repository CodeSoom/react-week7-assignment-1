import React from 'react';

export default function Button({ name = '버튼', onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {name}
    </button>
  );
}
