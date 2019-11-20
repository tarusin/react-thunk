import {combineReducers} from "redux";
import {items, itemsHasError, itemsIsLoading} from "./items"

const rootReducer = combineReducers({
    items,
    itemsHasError,
    itemsIsLoading
});

export default rootReducer;
