import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  context('type이 없을 때', () => {
    function renderTextField() {
      const handleChange = jest.fn();

      return render(
        <TextField
          label="리뷰 설명"
          name="description"
          onChange={handleChange}
        />,
      );
    }

    it('라벨과 인풋을 렌더한다.', () => {
      const { queryByLabelText } = renderTextField();

      expect(queryByLabelText('리뷰 설명')).not.toBeNull();
    });

    it('라벨과 text타입 인풋을 렌더한다.', () => {
      const { container } = renderTextField();

      expect(container).toContainHTML('type="text"');
    });
  });

  context('type이 있을 때', () => {
    function renderTextField() {
      const handleChange = jest.fn();

      return render(
        <TextField
          label="평점"
          type="number"
          name="score"
          onChange={handleChange}
        />,
      );
    }

    it('라벨과 인풋을 렌더한다.', () => {
      const { queryByLabelText } = renderTextField();

      expect(queryByLabelText('평점')).not.toBeNull();
    });

    it('라벨과 입력한 type의 인풋을 렌더한다.', () => {
      const { container } = renderTextField();

      expect(container).toContainHTML('type="number"');
    });
  });

  it('리뷰 폼에 입력 이벤트가 동작한다.', () => {
    const handleChange = jest.fn();

    const name = 'score';
    const value = '5';

    const { getByLabelText } = render(
      <TextField
        label="평점"
        type="number"
        name={name}
        onChange={handleChange}
      />,
    );

    fireEvent.change(getByLabelText('평점'), { target: { value } });

    expect(handleChange).toBeCalledWith({ name, value });
  });
});
