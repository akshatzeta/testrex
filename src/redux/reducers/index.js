import { combineReducers } from 'redux';
import timeSlotReducer from './timeSlotReducer';

const rootReducer = combineReducers({
  timeSlots: timeSlotReducer,
  // other reducers can go here
});

export default rootReducer;