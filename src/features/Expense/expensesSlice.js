import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "",
    amount: 0,
    price: 0,
    date: "",
    description: "",
  },
];

const expensesSlice = createSlice({
  initialState,
  name: "payments",
  reducers: {
    addExpense(state, action) {
      state.push(action.payload);
    },
    deleteExpense(state, action) {
      state.filter((item) => item.id !== action.payload);
    },
    reset() {
      return [];
    },
  },
});

export const selectAllPayments = (state) => state.payments;
export const { addExpense, deleteExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
