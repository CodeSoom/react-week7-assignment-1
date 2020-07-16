import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import LoginPageContainer from './LoginPageContainer';

jest.mock('react-redux');

describe('LoginPageContainer.test', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email:'',
        password:'',
      }
    }));
  });

  it('renders login button', () => {
    const { container, getByText } = render((
      <LoginPageContainer />
    ));
      
    expect(container).toHaveTextContent('ID');
    //fireEvent.click(getByText('ID'));
    //expect(dispatch).toBeCalled();
  });
});