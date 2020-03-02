import { GET, ERROR, ADD_POST, DEL_POST } from "../actions/types";
const initialState = {
  movies: []
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_POST:
      return {
        ...state,
        movies: [payload, ...state.movies]
      };
    case GET:
      return {
        ...state,
        movies: payload
      };

    case DEL_POST:
      return {
        ...state,
        movies: state.movies.filter(item => item.id !== payload)
      };

    case ERROR:
      return {
        ...state,
        errors: payload
      };
    default:
      return {
        ...state
      };
  }
};

export default movieReducer;
