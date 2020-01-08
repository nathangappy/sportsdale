import React from 'react';

import './product-list.styles.scss';

import ProductItem from '../product-item/product-item.component';

const ProductList = ({ name, items }) => (
  <div className='products'>
    <h4>{name.toUpperCase()}</h4>
    <div className='products__list'>
      {items.map(item => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default ProductList;
