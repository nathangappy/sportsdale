import React from 'react';

import './login.styles.scss';

import { auth } from '../../firebase/firebase';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async e => {
    const { email, password } = this.state;
    e.preventDefault();
    try {
      auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
      console.log('user login');
    } catch (error) {
      console.log('error signin in user');
    }
  };
  render() {
    return (
      <div className='login'>
        <div className='login__group'>
          <h2>Login</h2>
          <p>
            Not a member yet? <a href='/register'>Create Account</a>
          </p>
          <form onSubmit={this.handleSubmit}>
            <input type='email' name='email' value={this.state.email} onChange={this.handleChange} placeholder='Email' required />
            <input type='password' name='password' value={this.state.password} onChange={this.handleChange} placeholder='Password' required />
            <button type='submit'>Log In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
