import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { addCategory } from "../stores/action/actionCreator";


export const AddCategory = ({ postData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let [inputData, setInputData] = useState({
    name: '',
  });

  const formHandler = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addCategory(inputData));
    navigate("/category");
  };

  return (
    <>
      <div style={{ marginTop: "1rem" }} className="d-flex justify-content-sm-center d-flex align-items-center" >
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="name" placeholder="Name" onChange={(formHandler)} />
          </div>
          <button type="submit" className="btn btn-dark">ADD</button>
        </form>
      </div>
    </>
  );
};
