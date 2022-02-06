import { produce } from "immer";
import { types } from "./types";

const INITIAL_STATE = {
  comments: [],
};

const authReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case types.SET_COMMENTS:
      return produce(state, (draft) => {
        draft.comments = [...state.comments, ...action.payload.comments];
      });

    case types.RESET:
      return produce(state, (draft) => {
        draft.comments = [];
      });

    default:
      return state;
  }
};

export default authReducer;
