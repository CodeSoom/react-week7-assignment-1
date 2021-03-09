import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import ReviewForm from '../ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  const { score, description } = { score: '5', description: '맛있네요~!' };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderReviewForm() {
    return render(
      <ReviewForm
        userReviewInputs={{ score, description }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />,
    );
  }

  it('평점, 내용 입력창과 리뷰 남기기 버튼을 보여준다.', () => {
    const { queryByText, queryByLabelText } = renderReviewForm();

    expect(queryByLabelText('평점')).toBeInTheDocument();
    expect(queryByLabelText('리뷰 내용')).toBeInTheDocument();
    expect(queryByText('리뷰 남기기')).toBeInTheDocument();
  });

  it('평점 입력창과 내용 입력창에 입력을 하면 handleChange함수가 실행된다.', () => {
    const controls = [
      {
        label: '평점', name: 'score', origin: score, value: '3',
      },
      {
        label: '리뷰 내용', name: 'description', origin: description, value: '맛없어요.',
      },
    ];

    const { queryByLabelText } = renderReviewForm();

    controls.forEach(({
      label, name, origin, value,
    }) => {
      expect(queryByLabelText(label).value).toBe(origin);

      fireEvent.change(queryByLabelText(label), { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('Log In 버튼을 누르면 handleSubmit함수가 실행된다.', () => {
    const { queryByText } = renderReviewForm();

    fireEvent.click(queryByText('리뷰 남기기'));

    expect(handleSubmit).toBeCalled();
  });
});
