import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryDetail } from "../stores/action/actionCreator";
import { editCategory } from "../stores/action/actionCreator";

function EditCategory() {
  const { id } = useParams();
  const { detailCategory } = useSelector((state) => state.detailCategory);
  const el = detailCategory

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setCategoryDetail(id))
  }, [])

  let [editData, setCategoryData] = useState({
    name: '',
  });

  useEffect(() => {
    setCategoryData({
      name: el?.name || "",
    })
  }, [el])


  const formHandler = (e) => {
    setCategoryData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    let dataEdit = { ...editData }
    dispatch(editCategory(dataEdit, id));
    navigate("/category");
  };

  return (
    <>
      {/* {JSON.stringify(el)} */}
      <div style={{ marginTop: "2rem" }} className="d-flex justify-content-sm-center d-flex align-items-center" >
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="name" placeholder="Name"
              value={editData.name}
              onChange={(formHandler)} />
          </div>
          <button type="submit" className="btn btn-dark">EDIT</button>
        </form>
      </div>
    </>
  );
}

export default EditCategory;
