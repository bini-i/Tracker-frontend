import { SET_SIGNED_IN } from '../actions';

const signedInReducer = (state = false, action) => {
  switch (action.type) {
    case SET_SIGNED_IN:
      return action.status;
    default:
      return state;
  }
};

export default signedInReducer;
