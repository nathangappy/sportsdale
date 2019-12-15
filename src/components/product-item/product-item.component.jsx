import React from 'react';

import './product-item.styles.scss';

const ProductItem = ({ id, name, price, imageUrl }) => (
  <div className='product__item'>
    {/* <div style={{ backgroundImage: `url(${imageUrl})` }} /> */}
    <div className='product__imageContainer'>
      <img src={`${imageUrl}`} alt='product' />
    </div>
    <div>
      <p>{name}</p>
      <p>${price}</p>
    </div>
  </div>
);

export default ProductItem;
