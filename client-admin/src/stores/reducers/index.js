import { combineReducers } from "redux";
import productReducer from "./product";
import detailReducer from "./detail";
import categoryReducer from "./category";
import categoryDetailReducer from "./categoryDetail";
import detailImageReducer from "./detailImage";


const rootReducer = combineReducers({
    product: productReducer,
    detail: detailReducer,
    category: categoryReducer,
    detailCategory : categoryDetailReducer,
    detailImage : detailImageReducer
  });

export default rootReducer;