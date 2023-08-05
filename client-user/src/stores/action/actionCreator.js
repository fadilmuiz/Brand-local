import { PRODUCT_SET, DETAIL_SET } from '../action/actionType'
// BASE_URL = `http://localhost:3000`
const BASE_URL = `https://iproject.fadilmuiz.online`


// --------------------- PRODUCT ----------------------\\
export const fetchProduct = (payload) => ({
  type: PRODUCT_SET,
  payload
});

export const setProduct = () => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/public/clothes`)
    const responseJson = await response.json();
    dispatch(fetchProduct(responseJson))
  } catch (err) {
    console.log(err);
  }
}

export const fetchProductLoading = (payload) => ({
  type: PRODUCT_LOADING,
  payload,
});


// --------------------- DETAIL PRODUCT ----------------------\\
export const fetcDetail = (payload) => ({
  type: DETAIL_SET,
  payload
})

export const setDetail = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/public/clothes/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      }
    })
    const responseJson = await response.json();
    dispatch(fetcDetail(responseJson))
  } catch (err) {
    console.log(err);
  }
}
