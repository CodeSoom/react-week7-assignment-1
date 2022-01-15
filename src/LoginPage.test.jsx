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

  it("renders input control", () => {
    const { getByLabel } = render(<LoginPage />);

    expect(getByLabel(Email)).not.tobeNull();
  });
});

/* Login 

function renderLogin({email, password} = {}){
  return render((
    <LoginForm 
    fields ={{emial, password},
  onChange ={handle}}
  ))
}
it('listends change event', () => {
  getbyLabelText

  const controls = [
    {label: E-mail, name: 'email', value: }
    {label: Password, name: 'email', value: }

  ]

  controls.forEach({label, name, value})=> {
    const input = getByLabelText(label);
    fireEvent.change(input, {target: {value}})
    expect(handleCahnge).toBeCalledWith({name, value})
  }
})

it(renders Log in button), () => {

  getByText

  fireEvent.click(Log In)

  handleSubmit.called
}


//////


postLoginRequest

fetch(
url,
  method:'POST',
  body : JSON.strinify({emial, password})
)
 {accessToken} = await response.json();
 return accessToken
*/
