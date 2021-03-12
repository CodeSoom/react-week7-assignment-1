import React from 'react';


export default function LoginForm({ fields, onChange, onSubmit }) {
  const { email, password } = fields;

  function setInput(type, value) {
    return (
      <input
        type={type}
        id={`login-${type}`}
        name={type}
        value={value}
        onChange={handleChange}
      />
    );
  }
  function handleChange(event){
    const { target: { name, value } } = event;
    onChange({ name, value });
  }
  return (
    <>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        {setInput('email', email)}
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        {setInput('password', password)}
      </div>
      <button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </button>
    </>
  );
}
