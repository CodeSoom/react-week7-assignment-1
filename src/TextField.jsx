import React from 'react';

export default function TextField({ label }) {

  // const handleChange = (event) => {
  //   const { target: { name, value } } = event;

  //   onChange({ name, value });
  // };

  return (
    <label>
      { label }
      <input />
    </label>
  );
}
