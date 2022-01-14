import { render } from "@testing-library/react";

import LoginPage from "./LoginPage";
/*
1. 로그인 타이틀이 보인다
*/

describe("LoginPage", () => {
  it("renders LogIn title", () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent("Log In");
  });
});
