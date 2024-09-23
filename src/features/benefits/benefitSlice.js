import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  benefits: [
    {
      title: 'Employee Health Benefit',
      sku: '708 SKU available',
      status: 'Published',
      buttonText: 'View Benefits',
    },
    {
      title: 'Employee Benefit',
      sku: '707 SKU available',
      status: 'Published',
      buttonText: 'View Benefits',
    },
    {
      title: 'New Joinee Health Screening',
      sku: '1 SKU available',
      status: 'Draft',
      buttonText: 'Edit Benefits',
    },
  ],
  searchTerm: '',
};

const benefitSlice = createSlice({
  name: 'benefits',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = benefitSlice.actions;

export default benefitSlice.reducer;
