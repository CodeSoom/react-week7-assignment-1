export default function TextFields({
  fields, handleChange, form,
}) {
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
            placeholder={field}
            value={form[field]}
            onChange={(e) => handleChange(e.target)}
          />
        </div>
      ))}
    </>
  );
}
