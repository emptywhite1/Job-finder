import loggedReducer from './loggedReducer';
import { combineReducers } from 'redux';

const Reducers = combineReducers({
  isLogged: loggedReducer
})

export default Reducers