import { render, screen, fireEvent } from '@testing-library/react';

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
    />));

  context('type이 있을 경우', () => {
    it('지정한 "number"가 랜더링된다', () => {
      const { container } = renderTextField({
        label: '평점', name: 'score', type: 'number',
      });

      expect(screen.queryByLabelText('평점')).not.toBeNull();
      expect(container).toContainHTML('type="number"');
    });
  });

  context('type이 없을 경우', () => {
    it('기본값인 "text"가 랜더링된다', () => {
      const { container } = renderTextField({
        label: '리뷰 내용', name: 'description',
      });

      expect(screen.queryByLabelText('리뷰 내용')).not.toBeNull();
      expect(container).toContainHTML('type="text"');
    });
  });

  it('입력한 값을 랜더링한다', () => {
    const name = 'score';
    const value = '5';

    const { getByLabelText } = renderTextField({
      label: '평점', name, value, type: 'number',
    });

    fireEvent.change(getByLabelText('평점'), { target: { value } });

    expect(getByLabelText('평점').value).toBe(value);
  });

  it('input 창에 입력하면 handleChange가 호출된다', () => {
    renderTextField({
      label: '평점', name: 'score', type: 'number',
    });

    const input = screen.getByLabelText('평점');

    fireEvent.change(input, { target: { value: '5' } });

    expect(handleChange).toBeCalledWith({ name: 'score', value: '5' });
  });
});
