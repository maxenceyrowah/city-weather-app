import { SET_WEATHER, SET_LOADING } from "./actionTypes";

const initialState = {
  data: {},
  loading: false,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return {
        ...state,
        data: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
