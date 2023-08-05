import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDetail } from "../stores/action/actionCreator";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Detail() {
  const { id } = useParams();
  const { detailProduct } = useSelector((state) => state.detail);
  const dispatch = useDispatch()
  const el = detailProduct
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(setDetail(id))
  }, [])

  const EditPage = (id) => {
    navigate(`/clothesEdit/${id}`)
}

  return (
    <>
      {/* {JSON.stringify(el)} */}
      <div className="container">
        <h1>Detail</h1>
        <div className="row row-cols-1qs row-cols-md-3 g-4">
          <div className="card">
            <img src={el.mainImg} style={{ height: "370px" }} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{el.name}</h5>
              <p className="card-text">Rp{el.price}</p>
              <p className="card-text">{el.description}</p>
              <a onClick={() => EditPage(el.id)} src={el.mainImg} href="" className="btn btn-primary">Edit</a>
              <a style={{marginLeft:"4px"}} href="" className="btn btn-danger">Delete</a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}