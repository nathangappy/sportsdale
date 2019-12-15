import React from 'react';

import './shop.styles.scss';

import ALL_PRODUCTS from './product-list';

import ProductList from '../../components/product-list/product-list.component';

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teamProducts: ALL_PRODUCTS
    };
  }
  render() {
    const { teamProducts } = this.state;
    return (
      <div className='shop'>
        {teamProducts.map(({ id, ...otherTeamProps }) => (
          <ProductList key={id} {...otherTeamProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
