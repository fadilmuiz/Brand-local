import Card from '../componen/Card'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { setProduct } from '../stores/action/actionCreator';


export default function Home() {
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
        <Card data={products.clothes} />
        </>
    )
  }