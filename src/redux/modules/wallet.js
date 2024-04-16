const initialState = {
    money: 0,
    currency: "USD",
};

// actions
export const setMoney = (money) => {
    return {
        type: "SET/money",
        money,
    };
};
export const setCurrency = (currency) => {
    return {
        type: "SET/currency",
        currency,
    };
};

function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "GET":
            return state;
        case "SET/money":
            return { ...state, money: action.money };
        case "SET/currency":
            return { ...state, currency: action.currency };
        default:
            return state;
    }
}
export default reducer;
