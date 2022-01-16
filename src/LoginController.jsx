export default function LoginController() {
  return (
    <>
      <div>
        <label htmlFor="input-email">E-mail</label>
        <input type="text" id="input-email" name="input-email" />
      </div>
      <div>
        <label htmlFor="input-password">Password</label>
        <input type="password" id="input-password" name="input-password" />
      </div>
    </>
  );
}
