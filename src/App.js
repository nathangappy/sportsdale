import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import { auth, createProfile } from './firebase/firebase';

import Header from './components/header/header.component';
import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import Register from './pages/register/register.component';
import Login from './pages/login/login.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }
  unsubscribe = null;
  componentDidMount() {
    // listen for user change and update state
    this.unsubscribe = auth.onAuthStateChanged(async user => {
      this.setState({ currentUser: user });
      if (user) {
        const userReference = await createProfile(user);
        userReference.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: user });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <Header user={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
