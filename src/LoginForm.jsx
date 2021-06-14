export default function LoginForm({ handleChange, handleSubmit, form }) {
  const fields = ['email', 'password'];

  return (
    <>
      {fields.map((field) => (
        <div key={field}>
          <label htmlFor={`input-${field}`}>
            {field}
          </label>
          <input
            type="text"
            id={`input-${field}`}
            name={field}
            value={form[field]}
            onChange={(e) => handleChange(e.target)}
          />
        </div>
      ))}

      <button
        type="button"
        onClick={handleSubmit}
      >
        Log In
      </button>
    </>
  );
}
