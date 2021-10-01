import { fireEvent, render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  const renderTextField = ({
    label, name, type, value,
  }) => render((
    <TextField
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
    />
  ));

  beforeEach(() => {
    handleChange.mockClear();
  });

  context('with type', () => {
    it('renders label and input control', () => {
      const { container, queryByLabelText } = renderTextField({
        label: '평점',
        name: 'score',
        type: 'number',
        value: '',
      });

      expect(queryByLabelText('평점')).not.toBeNull();
      expect(container).toContainHTML('type="number');
    });

    it('listens change event', () => {
      const name = 'score';
      const value = '5';

      const { getByLabelText } = renderTextField({
        label: '평점',
        type: 'number',
        name,
        value: '',
      });

      const input = getByLabelText('평점');

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  context('without type', () => {
    it('renders label and input control', () => {
      const { container, queryByLabelText } = renderTextField({
        label: '리뷰 설명',
        name: 'descriptoin',
        value: '',
      });

      expect(queryByLabelText('리뷰 설명')).not.toBeNull();
      expect(container).toContainHTML('type="text');
    });
  });

  it('listens change events', () => {
    const name = 'description';
    const value = '맛있어요';

    const { getByLabelText } = renderTextField({
      label: '리뷰 설명',
      name,
      value: '',
    });

    fireEvent.change(getByLabelText('리뷰 설명'), { target: { value, name } });

    expect(handleChange).toBeCalledWith({ name, value });
  });
});
