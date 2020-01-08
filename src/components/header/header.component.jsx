import React from 'react';

import './header.styles.scss';

import { auth } from '../../firebase/firebase';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { currentUser } from '../../redux/user/user.selectors';

const Header = ({ user }) => (
  <div className='header'>
    <Link to='/'>
      <h1>Sportsdale</h1>
    </Link>
    {user ? (
      <div className='header__navigation'>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/cart'>Cart</Link>
        <div className='link' onClick={() => auth.signOut()}>
          Sign Out
        </div>
      </div>
    ) : (
      <div className='header__navigation'>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/cart'>Cart</Link>
        <Link to='/login'>Login</Link>
        {/* <Link to='/register'>Register</Link> */}
      </div>
    )}
  </div>
);

const mapStateToProps = state => ({
  user: currentUser(state)
});

export default connect(mapStateToProps)(Header);
