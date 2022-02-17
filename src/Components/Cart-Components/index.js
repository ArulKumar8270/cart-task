import React, { useEffect } from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {increaseQuantity, decreaseQuantity, deleteCart} from '../../Actions'
export default function CartPage() {

    const dispatch = useDispatch();
    const items = useSelector(state => state.CartItems);
    const TotalCartItems = useSelector(state => state.CartItems.CartNumber);

    let ListCart = [];
    let TotalCart=0;
    Object.keys(items.Carts).forEach(function(item){
        TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });

    const TotalPrice = ((price, quantity) => {
        return Number(price * quantity);
    })

  return (
    <div className='container'>
        <nav className='mt-5'>
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Cart</li>
        </ol>
        </nav>
        <div className="card">
            <div className="card-header bg-dark p-3">
                <div className="card-header-flex">
                    <h5 className="text-white m-0">Cart Calculation ({TotalCartItems})</h5>
                </div>
            </div>
            <div className="card-body p-0">
                <table className="table cart-table mb-0">
                    <thead>
                        <tr>
                        <th>Action</th>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th className="text-right"><span id="amount" className="amount">Total Amount</span></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            items.Carts ? items.Carts.map((cartItem, index) =>
                            <tr>
                                <td>
                                <button className="prdct-delete" onClick={() => dispatch(deleteCart(index))}><i className="fa fa-trash-alt"></i></button>
                                </td>
                                <td>
                                    <div className="product-img">
                                        <img src={cartItem.image} alt="" />
                                    </div>
                                </td>
                                <td>
                                    <div className="product-name">
                                        <p>{cartItem.name}</p>
                                    </div>
                                </td>
                                <td>{TotalPrice(cartItem.price, cartItem.quantity)}</td>
                                <td>
                                    <div className="prdct-qty-container">
                                        <button className="prdct-qty-btn" type="button" onClick={()=> dispatch(decreaseQuantity(index))}><i className="fa fa-minus" ></i></button>
                                        <input type="text" name="qty" className="qty-input-box" value={cartItem.quantity} />
                                        <button className="prdct-qty-btn" type="button" onClick={()=> dispatch(increaseQuantity(index))}><i className="fa fa-plus" ></i></button>
                                    </div>
                                </td>
                                <td className="text-right">{TotalPrice(cartItem.price, cartItem.quantity)}</td>
                            </tr>
                            
                                ): <div>No Products in Cart </div>
                            }
                        
                    </tbody>
                    <tfoot>
                        <tr> 
                            <th colspan="6" className="text-right">Total Price<span className="ml-2 mr-2">: </span><span className="text-danger">{Number(TotalCart)}</span></th>
                        </tr>
                    </tfoot>
                </table>
                <div className='CartTotal'>
                    <div>
                        <Link to='/' ><button>Back TO Shop</button></Link>
                    </div>
                    <div className="text-right">
                        <button>Check Out</button>
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}
