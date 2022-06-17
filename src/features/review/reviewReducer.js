export const reviewState = {
  reviewFields: {
    score: 0,
    description: '',
  },
  reviews: {
    isLoading: false,
    isError: false,
    errorMessage: '',
    data: [],
  },
};

export const reviewReducer = {
  setReviewFields(state, { payload: { name, value } }) {
    return {
      ...state,
      reviewFields: {
        ...state.reviewFields,
        [name]: value,
      },
    };
  },

  setReviews(state, { payload: { score, description } }) {
    return {
      ...state,
      reviews: {
        isLoading: false,
        isError: false,
        errorMessage: '',
        data: [...state.reviews.data, { score, description }],
      },
    };
  },
};
