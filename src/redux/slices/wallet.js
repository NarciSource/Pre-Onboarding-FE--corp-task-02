import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    money: 0,
    currency: "USD",
};

const walletSlice = createSlice({
    name: "WALLET",
    initialState,
    reducers: {
        setMoney: (state, action) => {
            state.money = action.payload;
        },
        setCurrency: (state, action) => {
            state.currency = action.payload;
        },
    },
});

export const { setMoney, setCurrency } = walletSlice.actions;
export default walletSlice.reducer;
