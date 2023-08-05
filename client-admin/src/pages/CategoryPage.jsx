import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { setCategory } from '../stores/action/actionCreator';
import { TbodyCategory } from '../componen/TbodyCategory';

export default function Category() {
  const { category } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setCategory())
  }, [])

  return (
    <>
      {/* {JSON.stringify(category)} */}
      <div className='container'>
        <button onClick={() => navigate("/addCategory")} type="button" className="btn btn-dark">Add New Category</button>
        <table className="table table-hover table-striped">
          <thead className="bill-header cs text-light">
            <tr>
              <th id="trs-hd-1" className="col-lg-1">
                No.
              </th>
              <th id="trs-hd-2" className="col-lg-1">
                Category
              </th>
              <th id="trs-hd-5" className="col-lg-2">
                Action
              </th>
            </tr>
          </thead>
            <TbodyCategory data={category} />
        </table >
      </div>
    </>
  )
}