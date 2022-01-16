import { useSelector, useDispatch } from "react-redux";
import { changeLoginField, requestLogin, requestLogout } from "./actions";
import LoginForm from "./LoginForm";
import { get } from "./utils";

export default function LoginFormContainer() {
  const { email, password } = useSelector(get("loginField"));
  const accessToken = useSelector(get("accessToken"));

  const dispatch = useDispatch();

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleLogin() {
    dispatch(requestLogin());
  }

  function handleLogout() {
    dispatch(requestLogout());
    console.log(accessToken);
  }
  console.log(accessToken);

  return (
    <>
      {!accessToken ? (
        <LoginForm
          loginField={{ email, password }}
          onChange={handleChange}
          onSubmit={handleLogin}
        />
      ) : (
        <button type='button' onClick={handleLogout}>
          Log out
        </button>
      )}
    </>
  );
}
