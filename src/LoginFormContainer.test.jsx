import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  context('when logged out', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: '',
        password: '',
      },
    }));

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('renders login fields', () => {
      const { queryByLabelText } = render((
        <LoginFormContainer />
      ));

      expect(queryByLabelText('E-mail')).not.toBeNull();
      expect(queryByLabelText('Password')).not.toBeNull();
    });

    it('renders login button', () => {
      const { container } = render((
        <LoginFormContainer />
      ));

      expect(container).toContainHTML('type="button"');
    });

    it('listens input change for "changeLoginField" action', () => {
      const { queryByLabelText } = render((
        <LoginFormContainer />
      ));

      const controls = [
        {
          label: 'E-mail',
          name: 'email',
          value: 'tester@example.com',
        },
        {
          label: 'Password',
          name: 'password',
          value: 'test',
        },
      ];

      controls.forEach(({ label, name, value }) => {
        fireEvent.change(queryByLabelText(label), { target: { value } });

        expect(dispatch).toBeCalledWith({
          type: 'changeLoginField',
          payload: {
            name,
            value,
          },
        });
      });
    });

    // postLogin -> requestLogin으로 액션 이름 변경
    it('listens "Log In" button click for "requestLogin" action', () => {
      const { queryByRole } = render((
        <LoginFormContainer />
      ));

      fireEvent.click(queryByRole('button'));

      expect(dispatch).toBeCalled();
    });
  });
});
