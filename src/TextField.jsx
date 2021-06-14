export default function TextField({ fields, handleChange, form }) {
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
    </>
  );
}
