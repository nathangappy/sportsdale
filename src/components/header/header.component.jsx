import React from 'react';

import './header.styles.scss';

import { auth } from '../../firebase/firebase';
import { Link } from 'react-router-dom';

const Header = ({ user }) => (
  <div className='header'>
    <Link to='/'>
      <h1>Sportsdale</h1>
    </Link>
    {user ? (
      <div className='header__navigation'>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <div className='link' onClick={() => auth.signOut()}>
          Sign Out
        </div>
      </div>
    ) : (
      <div className='header__navigation'>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/login'>Login</Link>
        {/* <Link to='/register'>Register</Link> */}
      </div>
    )}
  </div>
);

export default Header;
