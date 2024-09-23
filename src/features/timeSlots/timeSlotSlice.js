import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  selectedDays: [],
  activeTab: 'timeSlot',
  dummyData: Array(10).fill({
    time: '09:30 - 12:30',
    slots: '30 minutes',
    days: ['Sa', 'M', 'Tu', 'W', 'Th', 'F', 'Su'],
  }),
};

const timeSlotSlice = createSlice({
  name: 'timeSlots',
  initialState,
  reducers: {
    toggleDay: (state, action) => {
      const day = action.payload;
      if (state.selectedDays.includes(day)) {
        state.selectedDays = state.selectedDays.filter(d => d !== day);
      } else {
        state.selectedDays.push(day);
      }
    },
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    switchTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { toggleDay, openModal, closeModal, switchTab } = timeSlotSlice.actions;

export default timeSlotSlice.reducer;
