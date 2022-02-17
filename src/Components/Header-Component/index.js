import React, { useEffect } from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {increaseQuantity, decreaseQuantity, deleteCart} from '../../Actions'

export default function Header() {

    const dispatch = useDispatch();
    const items = useSelector(state => state.CartItems);
    const TotalCartItems = useSelector(state => state.CartItems.CartNumber);
    console.log(items)

    let ListCart = [];
    let TotalCart=0;
        Object.keys(items.Carts).forEach(function(item){
            TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
            ListCart.push(items.Carts[item]);
        });

    const TotalPrice = ((price, quantity) => {
        return Number(price * quantity);
    })
    useEffect(() => {
        localStorage.setItem('Cart', JSON.stringify(items))
    },[items])

return (
<div>
   <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
      <div className="container-fluid">
         <Link to='/' className="navbar-brand">Cart Task</Link>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
               <li className="nav-item">
                  <Link to='/' className="nav-link active" aria-current="page">Home</Link>
               </li>
               <li className="nav-item cart-items">
                  <a className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <button type="button" className="btn position-relative">
                  <i className="fa-solid fa-cart-arrow-down"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {TotalCartItems}
                    </span>
                    </button>
                  </a>
                  <ul className="cartModal">
                     <div className='miniCart'>
                        <h3>You have {TotalCartItems} items your Cart</h3>
                        <div className='CartItems'>
                            {
                                items.Carts ? items.Carts.map((cartItem, index) =>
                                    <div className='CartDetails' key={index}>
                                        <div className="product-img">
                                            <img src={cartItem.image} alt="" />
                                        </div>

                                        <div className="product-name">
                                            <p>{cartItem.name}</p>
                                        </div>   
                                        <div className='itemsPrice'>
                                            <h6>{TotalPrice(cartItem.price, cartItem.quantity)}</h6>
                                        </div>
                                        <div className="prdct-qty-container">
                                            <button className="prdct-qty-btn" type="button" onClick={()=> dispatch(decreaseQuantity(index))}><i className="fa fa-minus" ></i></button>
                                            <input type="text" name="qty" className="qty-input-box" value={cartItem.quantity} />
                                            <button className="prdct-qty-btn" type="button" onClick={()=> dispatch(increaseQuantity(index))}><i className="fa fa-plus" ></i></button>
                                        </div>
                                        <div className='ItemDelete'>
                                            <button className="prdct-delete" onClick={() => dispatch(deleteCart(index))}><i className="fa fa-trash-alt"></i></button>
                                        </div>
                                    </div>
                                ): <div>No Products in Cart </div>
                            }
                            <div className='CartTotal justify-content-end'>
                                <div className="text-right">
                                    <span>SubTotal</span> <span className="ml-2 mr-2">: </span><span className="text-danger"> {Number(TotalCart)}</span>
                                </div>
                            </div>
                            <div className='CartTotal'>
                                <div>
                                    <Link to='/Cart' ><button>View Cart</button></Link>
                                </div>
                                <div className="text-right">
                                    <button>Check Out</button>
                                </div>
                            </div>
                     </div>
                    </div>
                  </ul>
               </li>
            </ul>
         </div>
      </div>
   </nav>
</div>
)
}