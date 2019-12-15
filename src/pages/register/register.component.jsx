import React from 'react';

import './register.styles.scss';

import { auth } from '../../firebase/firebase';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async e => {
    const { email, password } = this.state;
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      console.log('user account created');
    } catch (error) {
      console.log('error creating user account');
    }
  };
  render() {
    return (
      <div className='register'>
        <div className='register__group'>
          <h2>Register</h2>
          <p>
            Already a member? <a href='/login'>Log In</a>
          </p>
          <form onSubmit={this.handleSubmit}>
            <input type='text' name='firstName' onChange={this.handleChange} value={this.state.firstName} placeholder='First Name' required />
            <input type='text' name='lastName' onChange={this.handleChange} value={this.state.lastName} placeholder='Last Name' required />
            <input type='email' name='email' onChange={this.handleChange} value={this.state.email} placeholder='Email' required />
            <input type='password' name='password' onChange={this.handleChange} value={this.state.password} placeholder='Password' required />
            <input
              type='password'
              name='confirmPassword'
              onChange={this.handleChange}
              value={this.state.confirmPassword}
              placeholder='Confirm password'
              required
            />
            <button type='submit'>Create Account</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
