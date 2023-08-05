import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryDetail } from "../stores/action/actionCreator";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteCategoryMiddleware } from "../stores/action/actionCreator";

export const TbodyCategory = ({ data }) => {
    const { id } = useParams();
    const { detailCategory } = useSelector((state) => state.detailCategory);
    const dispatch = useDispatch()
    const el = detailCategory
    const navigate = useNavigate();

    async function deleteHandler(id) {
        await dispatch(deleteCategoryMiddleware(id));
      }


    useEffect(() => {
        dispatch(setCategoryDetail(id))
    }, [])

    const EditPage = (id) => {
        navigate(`/categoryEdit/${id}`)
    }
    return (
        <>
            <tbody>
                {data?.map((el, index) => {
                    return (
                        <tr key={el.id}>
                            <td>{index + 1}</td>
                            <td>{el.name}</td>
                            <td>
                                <a onClick={() => EditPage(el.id)} href="" className="btn btn-primary">Edit</a>
                                <a onClick={() => deleteHandler(el.id)} style={{ marginLeft: "5px" }} href="" className="btn btn-danger">Delete</a></td>
                        </tr>
                    );
                })}
            </tbody>
        </>
    );
};
