import { fireEvent, render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  // function renderTextField() {
  //   return render((
  //     <TextField

  //       onChange={handleChange}
  //     />
  //   ));
  // }

  beforeEach(() => {
    handleChange.mockClear();
  });

  context('with type', () => {
    it('renders label and input control', () => {
      const { container, queryByLabelText } = render((
        <TextField
          label="평점"
          name="score"
          type="number"
          onChange={handleChange}
        />
      ));

      expect(queryByLabelText('평점')).not.toBeNull();
      expect(container).toContainHTML('type="number');
    });
  });

  context('without type', () => {
    it('renders label and input control', () => {
      const { container, queryByLabelText } = render((
        <TextField
          label="리뷰 설명"
          name="descriptoin"
          onChange={handleChange}
        />
      ));

      expect(queryByLabelText('리뷰 설명')).not.toBeNull();
      expect(container).toContainHTML('type="text');
    });
  });

  it('listens change events', () => {
    const name = 'score';
    const value = '5';
    const { getByLabelText } = render((
      <TextField
        label="평점"
        name={name}
        onChange={handleChange}
      />
    ));

    fireEvent.change(getByLabelText('평점'), { target: { value, name } });

    // const controls = [
    //   { label: '평점', name: 'score', value: '5' },
    //   { label: '리뷰 내용', name: 'description', value: '정말 최고 :)' },
    // ];

    // controls.forEach(({ label, name, value }) => {
    //   fireEvent.change(getByLabelText(label), {
    //     target: { value },
    //   });

    //   expect(handleChange).toBeCalledWith({ name, value });
    // });
  });
});
