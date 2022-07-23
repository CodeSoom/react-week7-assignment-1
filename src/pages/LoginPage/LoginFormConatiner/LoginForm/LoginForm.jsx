import { TextField } from '@/components';

export default function LoginForm({ loginFields, onChange, onSubmit }) {
  const { email, password } = loginFields;

  const handleChange = (event) => {
    const { target: { name, value } } = event;

    onChange({ name, value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          label="E-mail"
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          label="Password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Log In</button>
      </div>
    </form>
  );
}
