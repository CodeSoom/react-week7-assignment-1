import { fireEvent, render } from "@testing-library/react";

import LoginFormContainer from "./LoginFormContainer";

import { useDispatch, useSelector } from "react-redux";
/*
1. id, password input 보인다
2. input 값 변할때마다 changeLoginField()이 dispatch 된다
3. button 누르면 requestLogin()이 dispatch 된다
*/

describe("LoginFormContainer", () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({
        LoginField: {
          Email: "test@naver.com",
          Password: "1234",
        },
      })
    );
  });

  it("renders Id, Password controls and listens changeEvent", () => {
    const { getByLabelText } = render(<LoginFormContainer />);

    expect(getByLabelText("Email").value).toBe("test@naver.com");

    fireEvent.change(getByLabelText("Email"), {
      target: { value: "test2@daum.net" },
    });

    expect(dispatch).toBeCalledWith(
      changeLoginField("Email", "test2@daum.net")
    );
    expect(getByLabelText("Email").value).toBe("test2@daum.net");

    expect(getByLabelText("Password").value).toBe("1234");
  });

  it("renders Login button and submit LoginField", () => {
    const { getByText } = render(<LoginFormContainer />);

    fireEvent.click(getByText("Log In"));

    expect(dispatch).toBeCalledWith(requestLogin());
  });
});
