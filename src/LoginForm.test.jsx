import { fireEvent, getByDisplayValue, render } from "@testing-library/react";

import LoginForm from "./LoginForm";

import { useDispatch, useSelector } from "react-redux";

/*
1. renders input controls and listens change
2. renders login button
*/

describe("LoginForm", () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  function renderLoginForm({ email, password } = {}) {
    return render(
      <LoginForm
        loginField={{ email, password }}
        onChange={handleChange}
        onClick={handleClick}
      />
    );
  }
  it("renders input controls and listens changeEvent", () => {
    const email = "test@naver.com";
    const password = "1234";
    const { getByLabelText } = renderLoginForm({ email, password });
    const controls = [
      // 각각의 input의 속성을 정리해둔 변수
      { label: "Email", name: "Email", origin: email, value: "test@naver.com" },
      { label: "Password", name: "Password", origin: password, value: "1234" },
    ];

    controls.forEach((control) => {
      const { label, origin, name, value } = control;
      const input = getByLabelText(label);

      expect(input.value).toBe(origin);

      fireEvent.change(input, { target: { value } });

      expect(input.value).toBe(value);
      expect(handleChange).toBeCalled({ name, value });
    });
  });

  it("renders 'Login' button and listen submitEvent", () => {
    const { getByText } = renderLoginForm();

    fireEvent.click(getByText("Log In"));

    expect(handleSubmit).toBeCalled();
  });
});
