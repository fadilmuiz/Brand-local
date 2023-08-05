import { DETAIL_SET } from "../action/actionType";

const initialState = {
    detailProduct : {}
}
// console.log(detailProduct);

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case DETAIL_SET:
            return {
                ...state,
                detailProduct: action.payload
            }
            default:
                return state;
            }
        }

export default detailReducer