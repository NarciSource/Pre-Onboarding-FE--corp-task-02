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
            if (isNaN(action.payload)) {
                console.log("숫자만 입력");
            } else {
                state.money = action.payload > 1000 ? 1000 : action.payload;
            }
        },
        setCurrency: (state, action) => {
            state.currency = action.payload;
        },
    },
});

export const { setMoney, setCurrency } = walletSlice.actions;
export default walletSlice.reducer;
