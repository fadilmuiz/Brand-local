import { EDIT_PRODUCT } from "../action/actionType";

const initialState = {
  dataProduct: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PRODUCT:
      return {
        ...state,
        dataProduct: action.payload,
      };
    default:
      return state;
  }
}

export default productReducer;