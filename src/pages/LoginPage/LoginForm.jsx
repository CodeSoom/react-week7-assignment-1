import Form from '../../components/Form';

export default function LoginForm({ email, password, onSubmit }) {
  const handleSubmit = () => {
    onSubmit({ email, password });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <button type="submit">Log In</button>
    </Form>
  );
}
