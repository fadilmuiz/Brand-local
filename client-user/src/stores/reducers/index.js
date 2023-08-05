import { combineReducers } from "redux";
import productReducer from "./product";
import detailReducer from "./detail";


const rootReducer = combineReducers({
    product: productReducer,
    detail: detailReducer,
  });

export default rootReducer;