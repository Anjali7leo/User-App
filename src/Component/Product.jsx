import React from 'react';
import { subAction, addAction } from '../Redux/Products/product.action';
import {useDispatch, useSelector} from 'react-redux';

const Product = () => {
    let dispatch = useDispatch(subAction,addAction);
    let product = useSelector((state) => {
          return state
    })
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-6 mt-4 ">
                <table className='table table-hover'>
                    <thead className='bg-primary text-white'>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.product_Name}</td>
                            <td>{product.Price}</td>
                            <td>
                                <i  onClick={()=>{dispatch(subAction())}} className='fa fa-minus-circle'></i>
                                {product.qty}
                                <i  onClick={()=>{dispatch(addAction())}} className='fa fa-plus-circle'></i>
                            </td>
                            <td>{product.qty * product.Price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>

    )
}

export default Product