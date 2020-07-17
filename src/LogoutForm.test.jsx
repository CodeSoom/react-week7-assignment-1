import React from 'react';

import LogoutForm from './LogoutForm';

import { render, fireEvent } from '@testing-library/react';


describe('LogoutForm', ()=> {
  context('login success', ()=> {
    it('renders Logout form', ()=> {
      const email = 'test@email.com';

      const { container } = render((
        <LogoutForm 
          email={email}
        />
      ));

      expect(container).toHaveTextContent('test@email.com');
    });

    it('clicks Logout button', ()=> {
      const handleClick = jest.fn();

      const { getByText } = render((
        <LogoutForm 
          onClick={handleClick}
        />
      ));

      fireEvent.click(getByText('로그아웃'));
      expect(handleClick).toBeCalled();
    });
  });
});