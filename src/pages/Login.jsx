export default function Login() {
  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button type="button">Login</button>
    </div>
  );
}
