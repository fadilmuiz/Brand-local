import { CATEGORY_SET} from "../action/actionType";

const initialState = {
  category: []
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_SET:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
}

export default categoryReducer;
