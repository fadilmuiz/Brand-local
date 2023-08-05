import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDetail } from "../stores/action/actionCreator";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteProductMiddleware } from "../stores/action/actionCreator";

export const Tbody = ({ data }) => {
  const { id } = useParams();
  const { detailProduct } = useSelector((state) => state.detail);
  const dispatch = useDispatch()
  const el = detailProduct
  const navigate = useNavigate();

  async function deleteHandler(id) {
    await dispatch(deleteProductMiddleware(id));
  }

  useEffect(() => {
    dispatch(setDetail(id))
  }, [])

  const EditPage = (id) => {
    navigate(`/clothesEdit/${id}`)
  }

  return (
    <>
      <tbody>
        {data?.map((el, index) => {
          return (
            <tr key={el.id}>
              <td>{index + 1}</td>
              <td>{el.name}</td>
              <td>{el.description}</td>
              <td>Rp. {el.price}</td>
              <td><img style={{
                height: "200px", width: "150px"
              }} src={el.mainImg} /></td>
              <td>{el.Category.name}</td>
              <td>{el.User.username}</td>
              <td>
                <a onClick={() => EditPage(el.id)} src={el.mainImg} href="" className="btn btn-primary">Edit</a>
                <a onClick={() => deleteHandler(el.id)} style={{ marginLeft: "5px" }} href="" className="btn btn-danger">Delete</a></td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};
