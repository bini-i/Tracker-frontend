import { combineReducers } from 'redux';
import signedInReducer from './signIn';
import { setSignedIn } from '../actions';

export const rootReducer = combineReducers({
  signedIn: signedInReducer,
});

export const mapStateToProps = (state) => ({
  signedIn: state.signedIn,
});

export const mapDispatchToProps = (dispatch) => ({
  setSignedIn: (status) => {
    dispatch(setSignedIn(status));
  },
});
