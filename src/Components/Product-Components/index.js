import React, { useEffect } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import {getProductList, addToCart} from '../../Actions';
export default function ProductList() {

    const dispatch = useDispatch();
    const product = useSelector(state => state.products)
    
    useEffect(()=> { 
        dispatch(getProductList())
    }, [])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        localStorage.setItem('Product', product)
    }

  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                   {
                       product.products.data && product.products.data.map((product, index) => 
                       <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                        <div className="card mt-4">
                            <img className="card-img" src={product.img} alt="Vans" />
                                <div className="card-body">
                                    <h4 className="card-title">{product.title}</h4>
                                    <div className="buy d-flex justify-content-between align-items-center">
                                        <div className="price text-success"><h5 className="mt-4">{product.rs}</h5></div>
                                        <button className="btn btn-danger mt-3" onClick={()=>handleAddToCart(product)}><i className="fas fa-shopping-cart"></i> Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                   }
            </div>
        </div>
    </div>
  )
}
