import React from 'react';

export default function TextField({ label }) {
  return (
    <>
      <label htmlFor="id">
        {label}
      </label>
      <input
        type="number"
        id="id"
      />
    </>
  );
}
