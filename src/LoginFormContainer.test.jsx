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

    it('listens input change for "changeLoginFields" action', () => {
      const { queryByLabelText } = render((
        <LoginFormContainer />
      ));

      const controls = [
        {
          name: 'email',
          value: 'tester@example.com',
        },
        {
          name: 'password',
          value: 'test',
        },
      ];

      controls.forEach(({ name, value }) => {
        fireEvent.change(queryByLabelText(name), { target: { value } });

        expect(dispatch).toBeCalledWith({
          type: 'changeLoginFields',
          payload: {
            [name]: value,
          },
        });
      });
    });
  });
});
