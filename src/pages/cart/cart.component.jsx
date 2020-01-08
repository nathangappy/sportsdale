import React from 'react';
import { connect } from 'react-redux';
import { cartItems, numOfCartItems, cartTotal } from '../../redux/cart/cart.selectors';
import { Link } from 'react-router-dom';

import './cart.styles.scss';

const Cart = ({ cartItems, numOfItems, cartTotal }) => {
  console.log(numOfItems);
  let cart = cartItems.map(item => (
    <li key={item.id} className='cart__item'>
      <div className='cart__item--image'>
        <img src={item.imageUrl} alt='' />
      </div>
      <div className='cart__item--info'>
        <p>{item.name}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <div className='cart__item--price'>
        <p>Price: {item.price}</p>
      </div>
    </li>
  ));
  cartTotal = cartTotal.toFixed(2);
  return (
    <div className='cart'>
      <div className='cart__items'>
        <h2>Shopping Cart</h2>
        {cart.length > 0 ? (
          <ul>{cart}</ul>
        ) : (
          <div className='cart__empty'>
            <p>Your cart is currently empty</p>
            <Link to='/shop' className='cart__shoplink'>
              Shop Now
            </Link>
          </div>
        )}
      </div>
      <div className='cart__total'>
        <p>Number of Items: {numOfItems}</p>
        <p>Cart Total: ${cartTotal}</p>
        <button>Pay Now</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: cartItems(state),
    numOfItems: numOfCartItems(state),
    cartTotal: cartTotal(state)
  };
};

export default connect(mapStateToProps)(Cart);
