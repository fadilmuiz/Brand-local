import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { addProduct } from "../stores/action/actionCreator";
import { setCategory } from "../stores/action/actionCreator";


export const FormAdd = ({ postData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);


  let [inputData, setInputData] = useState({
    name: '',
    description: '',
    price: 0,
    mainImg: '',
    categoryId: 0,
    imgUrl1:'',
    imgUrl2:'',
    imgUrl3:'',
  });

  const formHandler = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
    // console.log(setInputData, "<<<<<<<<<<<");
  };

  useEffect(() => {
    dispatch(setCategory())
  }, [])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addProduct(inputData));
    navigate("/");
  };


  return (
    <>
      {/* {JSON.stringify(category)} */}
      <h4>Add New Product</h4>
      <div style={{ marginTop: "1rem" }} className="d-flex justify-content-sm-center d-flex align-items-center" >
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="name" placeholder="Name" onChange={(formHandler)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input type="text" className="form-control" name="description" placeholder="Description" onChange={(formHandler)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input type="text" className="form-control" name="price" placeholder="Price" onChange={(formHandler)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              name="categoryId"
              className="form-select"
              onChange={formHandler}
            >
              <option value="" disabled>
                ---choose genre---
              </option>
              {category?.map((el) => (
                <option value={el?.id} key={el?.id}>
                  {el?.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input type="text" className="form-control" name="mainImg" placeholder="Image Link" onChange={(formHandler)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Image1</label>
            <input type="text" className="form-control" name="imgUrl1" placeholder="Image Link" onChange={(formHandler)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Image2</label>
            <input type="text" className="form-control" name="imgUrl2" placeholder="Image Link" onChange={(formHandler)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Image3</label>
            <input type="text" className="form-control" name="imgUrl3" placeholder="Image Link" onChange={(formHandler)} />
          </div>
          <button type="submit" className="btn btn-dark">ADD</button>
        </form>
      </div>
    </>
  );
};
