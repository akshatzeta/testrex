import { ADD_TIME_SLOT, TOGGLE_DAY, SWITCH_TAB } from '../actions/timeSlotActions';

const initialState = {
  timeSlots: [],
  selectedDays: [],
  activeTab: 'timeSlot',
};

const timeSlotReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TIME_SLOT:
      return {
        ...state,
        timeSlots: [...state.timeSlots, action.payload],
      };
    case TOGGLE_DAY:
      const selectedDays = state.selectedDays.includes(action.payload)
        ? state.selectedDays.filter(day => day !== action.payload)
        : [...state.selectedDays, action.payload];
      return {
        ...state,
        selectedDays,
      };
    case SWITCH_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      return state;
  }
};

export default timeSlotReducer;