import Form from '../../components/Form';

export default function LoginForm({ values, onChange, onSubmit }) {
  const handleSubmit = () => {
    onSubmit(values);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" value={values.email} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" value={values.password} />
      </div>
      <button type="submit">Log In</button>
    </Form>
  );
}
