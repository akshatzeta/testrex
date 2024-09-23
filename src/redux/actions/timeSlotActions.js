export const ADD_TIME_SLOT = 'ADD_TIME_SLOT';
export const TOGGLE_DAY = 'TOGGLE_DAY';
export const SWITCH_TAB = 'SWITCH_TAB';

export const addTimeSlot = (timeSlot) => ({
  type: ADD_TIME_SLOT,
  payload: timeSlot,
});

export const toggleDay = (day) => ({
  type: TOGGLE_DAY,
  payload: day,
});

export const switchTab = (tab) => ({
  type: SWITCH_TAB,
  payload: tab,
});