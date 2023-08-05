import { PRODUCT_LOADING, PRODUCT_SET } from "../action/actionType";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_SET:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}

export default productReducer;
