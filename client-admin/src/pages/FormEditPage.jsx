import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDetail } from "../stores/action/actionCreator";
import { editProduct } from "../stores/action/actionCreator";
import { setCategory } from "../stores/action/actionCreator";
import { setImageDetail } from "../stores/action/actionCreator";


function EditForm() {
  const { id } = useParams();
  const { detailProduct } = useSelector((state) => state.detail);
  const { detailImage } = useSelector((state) => state.detailImage)
  const { category } = useSelector((state) => state.category);
  const el = detailProduct
  const elem = detailImage

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setDetail(id))
  }, [])

  useEffect(() => {
    dispatch(setImageDetail(id))
  }, [])

  useEffect(() => {
    dispatch(setCategory())
  }, [])

  let [editData, setProductData] = useState({
    name: '',
    slug: '',
    description: '',
    price: 0,
    mainImg: '',
    imgUrl1: '',
    imgUrl2: '',
    imgUrl3: '',
  });

  useEffect(() => {
    setProductData({
      name: el?.name || "",
      slug: el?.slug || "",
      description: el?.description || "",
      price: el?.price || "",
      mainImg: el?.mainImg || "",
      imgUrl1: elem?.imgUrl1 || '',
      imgUrl2: elem?.imgUrl2 || '',
      imgUrl3: elem?.imgUrl3 || '',
    })
  }, [el])


  const formHandler = (e) => {
    setProductData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    let dataEdit = { ...editData }
    dispatch(editProduct(dataEdit, id));
    navigate("/");
  };

  return (
    <>
      {/* {JSON.stringify(detailImage)} */}
      <div style={{ marginTop: "2rem" }} className="d-flex justify-content-sm-center d-flex align-items-center" >
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="name" placeholder="Name"
              value={editData.name}
              onChange={(formHandler)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input type="text" className="form-control" name="description" placeholder="Description"
              value={editData.description}
              onChange={(formHandler)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input type="text" className="form-control" name="price" placeholder="Price"
              value={editData.price}
              onChange={(formHandler)} />
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
            <input type="text" className="form-control" name="mainImg" placeholder="Image Link"
              value={editData.mainImg}
              onChange={(formHandler)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Image1</label>
            <input type="text" className="form-control" name="imgUrl1" placeholder="Image Link"
              value={editData.imgUrl1}
              onChange={(formHandler)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Image2</label>
            <input type="text" className="form-control" name="imgUrl2" placeholder="Image Link"
              value={editData.imgUrl2}
              onChange={(formHandler)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Image3</label>
            <input type="text" className="form-control" name="imgUrl3" placeholder="Image Link"
              value={editData.imgUrl3}
              onChange={(formHandler)} />
          </div>
          <button type="submit" className="btn btn-dark">EDIT</button>
        </form>
      </div>
    </>
  );
}

export default EditForm;
