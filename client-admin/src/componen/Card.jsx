import { useNavigate } from "react-router-dom";

function Cards({ data }) {
    const navigate = useNavigate()
    const detailPage = (id) => {
        navigate(`/clothes/${id}`)
    }
    return (
        <>
            <div style={{ marginTop: "50px" }} className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {data?.map((el) => {
                        return (
                            <div key={el.id} className="col">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img onClick={() => detailPage(el.id)} src={el.mainImg} className="card-img-top" alt="..." />
                                    <div style={{ height: "13rem" }} className="card-body">
                                        <h5 className="card-title">{el.name}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
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