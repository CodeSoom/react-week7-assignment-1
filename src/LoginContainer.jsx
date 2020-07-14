import React, { useState } from 'react';

export default function LoginContainer() {
  const [fields, setFields] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Log In</h2>

      <div>
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          name="email"
          id="Email"
          value={fields.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          name="password"
          id="Password"
          value={fields.password}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
