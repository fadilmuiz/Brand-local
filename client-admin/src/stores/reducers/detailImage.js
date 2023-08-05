import { IMAGE_DETAIL } from "../action/actionType";

const initialState = {
    detailImage : {}
}

const detailImageReducer = (state = initialState, action) => {
    switch (action.type) {
        case IMAGE_DETAIL:
            return {
                ...state,
                detailImage: action.payload
            }
            default:
                return state;
            }
        }

export default detailImageReducer