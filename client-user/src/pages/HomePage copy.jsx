import { useEffect, useState } from 'react'
// import Card from '../componen/Card'
import { useDispatch, useSelector } from "react-redux";
import { Tbody } from '../componen/Tbody';
import { setProduct, fetchProductLoading } from '../stores/action/actionCreator';
// import LoadingRow from '../componen/LoadingRow';
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Home() {
  // const { loading } = useSelector((state) => state.product);
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    // dispatch(fetchProductLoading(true));
    dispatch(setProduct())
  }, [])

  return (
    <>
    {/* {JSON.stringify(products.clothes)} */}
    <div className='container'>
    <button onClick={() => navigate("/formAdd")} type="button" className="btn btn-dark">Add Product</button>
      <table className="table table-hover table-striped">
        <thead className="bill-header cs text-light">
          <tr>
            <th id="trs-hd-1" className="col-lg-1">
              No.
            </th>
            <th id="trs-hd-2" className="col-lg-1">
              Name
            </th>
            <th id="trs-hd-3" className="col-lg-2">
              Description
            </th>
            <th id="trs-hd-4" className="col-lg-1">
              Price
            </th>
            <th id="trs-hd-5" className="col-lg-2">
              Image
            </th>
            <th id="trs-hd-5" className="col-lg-1">
              Category
            </th>
            <th id="trs-hd-6" className="col-lg-1">
              Created
            </th>
            <th id="trs-hd-5" className="col-lg-2">
              Action
            </th>
          </tr>
        </thead>
        <Tbody data={products.clothes} />
      </table >
      </div>
      {/* <Card data={products.clothes} /> */}
    </>
  )
}