import React from 'react';

export default function InputField({ label, name, onChange }) {
  return (
    <div>
      <label
        htmlFor="input-score"
      >
        평점
      </label>
      <input
        type="number"
        id="input-score"
      />
    </div>
  );
}
