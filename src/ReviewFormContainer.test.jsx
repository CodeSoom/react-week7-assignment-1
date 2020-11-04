import React from 'react';

import { render } from '@testing-library/react';

import ReviewFormContainer from './ReviewFormContainer';

jest.mock('react-redux');

describe('ReviewFormContainer', () => {
  // const dispatch = jest.fn();

  // beforeEach(() => {
  //   useDispatch.mockImplementation(() => dispatch);

  //   useSelector.mockImplementation((selector) => selector({
  //     reviewFields: {},
  //   }));
  // });

  it('renders input-controls', () => {
    const { queryByLabelText } = render(
      <ReviewFormContainer />,
    );

    expect(queryByLabelText('평점')).not.toBeNull();

    // fireEvent.change(getByLabelText('E-mail'), {
    //   target: { value: 'tester@example.com' },
    // });

    // expect(dispatch).toBeCalledWith({
    //   type: 'changeLoginField',
    //   payload: {
    //     name: 'email',
    //     value: 'tester@example.com',
    //   },
    // });
  });

  // it('renders login button', () => {
  //   const { queryByText, getByText } = render(
  //     <ReviewFormContainer />,
  //   );

  //   expect(queryByText('Log In')).not.toBeNull();

  //   fireEvent.click(getByText('Log In'));

  //   expect(dispatch).toBeCalled();
  // });
});
