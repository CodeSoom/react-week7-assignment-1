import Form from '../../components/Form';

export default function LoginForm({ values, onChange, onSubmit }) {
  const handleSubmit = () => {
    onSubmit(values);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <button type="submit">Log In</button>
    </Form>
  );
}
