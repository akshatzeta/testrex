import { configureStore, combineReducers } from "@reduxjs/toolkit";
import benefitReducer from './reducers/benefitReducer';
import timeSlotReducer from './reducers/timeSlotReducer';
import authReducer from './reducers/authReducer';
import customerReducer from './reducers/customerReducer';
import planReducer from '../features/plan/plan';

const rootReducer = combineReducers({
  benefits: benefitReducer,
  timeSlots: timeSlotReducer,
  customers: customerReducer,
  auth: authReducer,
  plan: planReducer, // Added todoReducer for API testing
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
