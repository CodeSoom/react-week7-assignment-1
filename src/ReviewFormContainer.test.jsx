import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { setForm } from './actions';
import ReviewFormContainer from './ReviewFormContainer';

jest.mock('react-redux');

describe('ReviewFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  beforeAll(() => {
    useDispatch.mockReturnValue(dispatch);

    useSelector.mockImplementation((selector) => selector({
      form: {
        score: 'score',
        description: 'description',
      },
    }));
  });

  it('listens change events', () => {
    const { getByRole } = render(<ReviewFormContainer />);

    const controls = [
      { name: 'score', value: '5' },
      { name: 'description', value: 'good' },
    ];

    controls.forEach(({ name, value }) => {
      const input = getByRole('textbox', { name });

      fireEvent.change(input, { target: { value } });

      expect(dispatch).toBeCalledWith(setForm({ name, value }));
    });
  });

  it('listens to button click event', () => {
    const { getByRole } = render(<ReviewFormContainer />);
    fireEvent.click(getByRole('button', { name: 'Submit' }));

    expect(dispatch).toBeCalled();
  });
});
