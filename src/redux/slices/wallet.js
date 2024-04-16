import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    money: 0,
    currency: "USD",
    exchange: {},
};

const walletSlice = createSlice({
    name: "WALLET",
    initialState,
    reducers: {
        setMoney: (state, action) => {
            const money = action.payload.replace(",", "");
            if (isNaN(money)) {
                console.log("숫자만 입력", money);
            } else {
                state.money = Intl.NumberFormat().format(money > 1000 ? 1000 : money);
            }
        },
        setCurrency: (state, action) => {
            state.currency = action.payload;
        },
        setExchange: (state, action) => {
            state.exchange = action.payload;
        },
    },
});

export const { setMoney, setCurrency, setExchange } = walletSlice.actions;
export default walletSlice.reducer;
