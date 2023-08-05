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
        <div className="row">
          <div className="col-md-5">
            <section className="container my-4" >
              <img
                src={el.mainImg}
                style={{ height: 300, width: 250, marginLeft: 90 }}
                className="my-5"
              />
            </section>
            {el.Images?.map((al, index) => {
              return (
                <>
                  <section key={al.index}>
                    {/* {JSON.stringify(el.Images)} */}
                    < img src={al.imgUrl1} style={{ height: 120 }} className="m-3 my-1" />
                    < img src={al.imgUrl2} style={{ height: 120 }} className="m-3 my-1" />
                    < img src={al.imgUrl3} style={{ height: 120 }} className="m-3 my-1" />
                  </section>
                </>
              )
            })}
          </div>

          <div className="col-md-7 my-3">
            <section>
              <div className="row">
                <div className="col-md-8" style={{ marginTop: '2rem' }}>
                  <small>{el.slug} </small>
                  <h3>{el.name}</h3>
                  <p>{el.Category?.name}</p>
                  {/* <p style={{ marginTop: '16rem' }}>100 ml</p> */}
                  <h4 style={{ marginTop: '2rem' }}>Description</h4>
                  <p>{el.description}</p>
                  <h5>Price</h5>
                  <h1>Rp. {el.price}</h1>
                  {/* <p>posted by: {el.User.username}</p> */}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}