import { CATEGORY_SET, PRODUCT_SET, PRODUCT_LOADING, REGISTER, LOGIN, DETAIL_SET, DETAIL_CATEGORY, IMAGE_DETAIL } from '../action/actionType'
// const BASE_URL = `'http://localhost:3000`
const BASE_URL = `https://iproject.fadilmuiz.online`

// --------------------- REGISTER ----------------------\\
export const registerAction = () => ({
  type: REGISTER,
});

export const registerMiddleware = (data) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    });

    const responseJson = await response.json();
    // console.log('User registration successful:', responseJson);
    // dispatch(registerAction(responseJson));
  } catch (err) {
    console.log('Error occurred during user registration:', err);
  }
};

// --------------------- LOGIN ----------------------\\
export const loginAction = () => ({
  type: LOGIN,
});

export const loginMiddleware = (data) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseJson = await response.json();
    localStorage.setItem("access_token", responseJson.token);
    // console.log(responseJson);
    dispatch(loginAction());
  } catch (err) {
    console.log(err);
  }
};

// --------------------- PRODUCT ----------------------\\
export const fetchProduct = (payload) => ({
  type: PRODUCT_SET,
  payload
});

export const setProduct = () => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/clothes`, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      }
    })
    const responseJson = await response.json();

    //set state ??
    dispatch(fetchProduct(responseJson))
  } catch (err) {
    console.log(err);
  }
}

export const fetchProductLoading = (payload) => ({
  type: PRODUCT_LOADING,
  payload,
});

// --------------------- Read Category ----------------------\\
export const fectCategory = (payload) => ({
  type: CATEGORY_SET,
  payload
})

export const setCategory = () => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/category`, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      }
    });
    const responseJson = await response.json();
    dispatch(fectCategory(responseJson))
  } catch (err) {
    console.log(err);
  }
}

// --------------------- DETAIL PRODUCT ----------------------\\
export const fetcDetail = (payload) => ({
  type: DETAIL_SET,
  payload
})

export const setDetail = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/clothes/${id}`, {
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

// --------------------- ADD PRODUCT ----------------------\\
export const addProduct = (data) => async () => {
  try {
    const response = await fetch(`${BASE_URL}/clothes`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data)
    });
    const responseJson = await response.json();
    // console.log(responseJson);
  } catch (err) {
    console.log(err);
  }
}

// --------------------- EDIT PRODUCT ----------------------\\
export const editProduct = (data, id) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/clothes/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token")
      },
      body: JSON.stringify(data)
    });
    const responseJson = await response.json();
    // console.log(responseJson);
  } catch (err) {
    console.log(err);
  }
}

// --------------------- ADD CATEGORY ----------------------\\
export const addCategory = (data) => async () => {
  try {
    const response = await fetch(`${BASE_URL}/category`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token")
      },
      body: JSON.stringify(data)
    });
    const responseJson = await response.json();
  } catch (err) {
    console.log(err);
  }
}

// --------------------- DETAIL CATEGORY ----------------------\\
export const fetcCategoryDetail = (payload) => ({
  type: DETAIL_CATEGORY,
  payload
})

export const setCategoryDetail = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/category/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      }
    })
    const responseJson = await response.json();
    dispatch(fetcCategoryDetail(responseJson))
  } catch (err) {
    console.log(err);
  }
}

// --------------------- EDIT PRODUCT ----------------------\\
export const editCategory = (data, id) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/category/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token")
      },
      body: JSON.stringify(data)
    });
    const responseJson = await response.json();
    // console.log(responseJson);
  } catch (err) {
    console.log(err);
  }
}

// --------------------- DELETE PRODUCT ----------------------\\
export const deleteProductMiddleware = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/clothes/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    });
    const responseJson = response.json();
    // console.log(responseJson);
  } catch (err) {
    console.log(err);
  }
};

// --------------------- DELETE CATEGORY ----------------------\\
export const deleteCategoryMiddleware = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/category/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    });
    const responseJson = response.json();
    // console.log(responseJson);
  } catch (err) {
    console.log(err);
  }
};

// --------------------- DETAIL IMAGE ----------------------\\
export const fetcImageDetail = (payload) => ({
  type: IMAGE_DETAIL,
  payload
})

export const setImageDetail = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/image/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      }
    })
    const responseJson = await response.json();
    dispatch(fetcImageDetail(responseJson))
  } catch (err) {
    console.log(err);
  }
}