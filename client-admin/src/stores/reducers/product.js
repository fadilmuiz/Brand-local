import { PRODUCT_LOADING, PRODUCT_SET } from "../action/actionType";

const initialState = {
  products: [],
  loading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_SET:
      return {
        ...state,
        products: action.payload,
      };
    case PRODUCT_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}

export default productReducer;
