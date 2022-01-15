import { useSelector, useDispatch } from "react-redux";

export default function LoginFormContainer() {
  const { email, password } = useSelector((state) => ({
    email: state.Email,
    password: state.Password,
  }));
  const dispatch = useDispatch();

  function handleChange(name, value) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleClick() {
    dispatch(requestLogin());
  }

  return (
    <LoginForm
      loginField={{ email, password }}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}
