import { combineReducers } from 'redux';
import { toggleLog } from '../actions/toggleLog';
import { toggleStats } from '../actions/toggleStats';

//import all reducers

var rootReducer = combineReducers({
// include all reducers
  toggleStats,
  toggleLog
});

export default rootReducer;