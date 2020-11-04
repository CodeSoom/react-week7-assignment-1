import React from 'react';

export default function TextField({ label, value }) {
  // const handleChange = (event) => {
  //   const { target: { name, value } } = event;

  //   onChange({ name, value });
  // };

  return (
    <label>
      { label }
      <input value={value} />
    </label>
  );
}
