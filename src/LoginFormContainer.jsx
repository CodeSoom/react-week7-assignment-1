import { useSelector, useDispatch } from "react-redux";
import { changeLoginField, requestLogin } from "./actions";
import LoginForm from "./LoginForm";
import { get } from "./utils";

export default function LoginFormContainer() {
  const { email, password } = useSelector(get("loginField"));
  const accessToken = useSelector(get("accessToken"));

  const dispatch = useDispatch();

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleClick() {
    dispatch(requestLogin());
  }

  return (
    <>
      <LoginForm
        loginField={{ email, password }}
        onChange={handleChange}
        onSubmit={handleClick}
      />
      {accessToken}
    </>
  );
}
