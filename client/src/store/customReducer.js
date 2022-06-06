const defaultState = {
  info: [],
};

const GET_INFO = "GET_INFO";

export const infoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_INFO:
      return { ...state, info: [...action.payload] };
    default:
      return state;
  }
};

export const addInfoFromServer = (payload) => ({ type: GET_INFO, payload });
