import React from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createProfile } from './firebase/firebase';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { currentUser } from './redux/user/user.selectors';

import Header from './components/header/header.component';
import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import Register from './pages/register/register.component';
import Login from './pages/login/login.component';
import Cart from './pages/cart/cart.component';

class App extends React.Component {
  unsubscribe = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    // listen for user change and update state to user profile
    this.unsubscribe = auth.onAuthStateChanged(async user => {
      this.setState({ currentUser: user });
      if (user) {
        const userReference = await createProfile(user);
        userReference.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(user);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route path='/cart' component={Cart} />
          <Route exact path='/register' render={() => (this.props.user ? <Redirect to='/' /> : <Register />)} />
          <Route exact path='/login' render={() => (this.props.user ? <Redirect to='/' /> : <Login />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: currentUser(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
