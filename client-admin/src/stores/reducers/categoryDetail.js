import { DETAIL_CATEGORY } from "../action/actionType";

const initialState = {
    detailCategory : {}
}

const categoryDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case DETAIL_CATEGORY:
            return {
                ...state,
                detailCategory: action.payload
            }
            default:
                return state;
            }
        }

export default categoryDetailReducer