import InputField from './InputField';

export default function LoginForm({ onChange, onSubmit }) {
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
