import React from 'react';
import { withRouter } from 'react-router-dom';

import './directory-item.styles.scss';

const DirectoryItem = ({ name, imageUrl, history, match, link }) => (
  <div className='team-item' onClick={() => history.push(`${match.url}${link}`)}>
    <div className='item-img-container'>
      <img src={`${imageUrl}`} alt='team logo' />
    </div>
    <div className='item-info-container'>
      <h1>{name}</h1>
      <span>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(DirectoryItem);
