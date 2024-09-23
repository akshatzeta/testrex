import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchPlan = createAsyncThunk("fetchPlan", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});

const planSlice = createSlice({
  name: "plan",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlan.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPlan.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPlan.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default planSlice.reducer;
