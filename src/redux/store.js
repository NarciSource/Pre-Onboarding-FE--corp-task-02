import { createStore, combineReducers } from "redux";
import wallet from "./modules/wallet";

const rootReducer = combineReducers({
    wallet,
});

export default createStore(rootReducer);
