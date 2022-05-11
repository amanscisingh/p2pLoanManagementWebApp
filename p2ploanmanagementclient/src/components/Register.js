import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerNewUser } from '../actions/apiActions';

const Register = () => {
    const userInfo = useSelector(state => state.userInfo);
    const loginInfo = useSelector(state => state.loginInfo);
    const dispatch = useDispatch();


  return (
    <div className='loginContainer'>
        <h2>Register</h2>
        <br />

        <label htmlFor="email">Name</label>
        <input type="name" name="name" value={userInfo.name} onChange={
            (e) => {
                dispatch({
                    type: 'UPDATE_NAME',
                    payload: e.target.value
                })  
            }
        } />
        <br />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={userInfo.email} onChange={
            (e) => {
                dispatch({
                    type: 'UPDATE_EMAIL',
                    payload: e.target.value
                })  
            }
        } />
        <br />

        <label htmlFor="password">Enter password</label>
        <input type="password" name="password" value={userInfo.password} onChange={
            (e) => {
                dispatch({
                    type: 'UPDATE_PASSWORD',
                    payload:  e.target.value
                })  
            }
        } />

        <label htmlFor="password">Re-Enter password</label>
        <input type="password" name="password" value={userInfo.password2} onChange={
            (e) => {
                dispatch({
                    type: 'UPDATE_RE_PASSWORD',
                    payload:  e.target.value
                })  
            }
        } />

        <br />
        <button onClick={
            () => {
                if (userInfo.name.length < 3 ) {
                    alert('Name must be at least 3 characters long');
                } else if (userInfo.email.length < 3 ) {
                    alert('Email must be at least 3 characters long');
                } else if(!userInfo.email.includes('@')) {
                    alert('Email must contain @');
                } else if(userInfo.password.length < 3 ) {
                    alert('Password must be at least 3 characters long');
                } else if (userInfo.password !== userInfo.password2) {
                    alert('Passwords do not match');
                } else {
                    // accept the registration
                    const user = {
                        name: userInfo.name,
                        email: userInfo.email,
                        password: userInfo.password
                    }

                    dispatch(registerNewUser(user));
                }


                
            }
        }>Register</button>
    </div>
  )
}

export default Register