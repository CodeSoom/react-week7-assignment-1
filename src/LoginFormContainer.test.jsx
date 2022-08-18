import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  // const dispatch = jest.fn();

  // beforeEach(() => {
  //   dispatch.mockClear();
  //   useDispatch.mockImplementation(() => dispatch);

  //   useSelector.mockImplementation((selector) => selector({
  //     categories: [
  //       { id: 1, name: '한식' },
  //       { id: 2, name: '양식' },
  //     ],
  //     selectedCategory: { id: 1, name: '한식' },
  //   }));
  // });

  it('renders login form', () => {
    const { queryByLabelText } = render((
      <LoginFormContainer />
    ));

    expect(queryByLabelText('E-mail')).not.toBeNull();
    expect(queryByLabelText('Password')).not.toBeNull();

    // fireEvent.click(getByText('양식'));

    // expect(dispatch).toBeCalled();
  });
});
