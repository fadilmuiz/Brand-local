import { useNavigate } from "react-router-dom";

function Cards({ data }) {
    const navigate = useNavigate()
    const detailPage = (id) => {
        navigate(`/clothes/${id}`)
    }
    return (
        <>
            <div style={{ marginTop: "40px" }} className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {data?.map((el) => {
                        return (
                            <div key={el.id} className="col">
                                <div className="card" style={{ width: "20rem" }}>
                                    <img src={el.mainImg} className="card-img-top" alt="..." />
                                    <div style={{ height: "10rem" }} className="card-body">
                                        <h5 className="card-title">{el.name}</h5>
                                        {/* <p className="card-text">{el.description}</p> */}
                                        <p className="card-text">Rp. {el.price}</p>
                                        <a style={{marginTop:"2px"}} onClick={() => detailPage(el.id)} href="" className="btn btn-primary">See Detail</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Cards;