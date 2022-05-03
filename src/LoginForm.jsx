import InputField from './InputField';

export default function LoginForm({ onChange, onSubmit }) {
  function handleChange(event) {
    const { target: { name, value } } = event;

    onChange({ name, value });
  }

  return (
    <>
      <InputField
        label="E-mail"
        type="email"
        name="email"
        onChange={onChange}
      />

      <InputField
        label="Password"
        type="password"
        name="password"
        onChange={onChange}
      />

      <button
        type="button"
        name="login"
        onClick={onSubmit}
      >
        log in
      </button>
    </>
  );
}
