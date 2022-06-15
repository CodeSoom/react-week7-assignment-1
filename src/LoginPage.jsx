export default function LoginPage() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <button type="submit">Log in</button>
    </form>
  );
}
