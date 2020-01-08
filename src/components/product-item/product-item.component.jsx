import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';

import './product-item.styles.scss';

const ProductItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='product__item'>
      <div className='product__imageContainer'>
        <img src={`${imageUrl}`} alt='product' />
      </div>
      <div>
        <p>{name}</p>
        <p>${price}</p>
        <button onClick={() => addItemToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(ProductItem);
