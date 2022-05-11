import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/apiActions';

const Login = () => {
    const userInfo = useSelector(state => state.userInfo);
    const loginInfo = useSelector(state => state.loginInfo);
    const dispatch = useDispatch();

  return (
    <div className='loginContainer'>
        <h2>Login</h2>
        <br />

        <label htmlFor="email">Please Enter email</label>
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
                    payload: e.target.value
                })  
            }
        } />

        <br />
        <button onClick={
            () => {
                const userData = {
                    email: userInfo.email,
                    password: userInfo.password
                }
                dispatch(loginUser(userData))
            }
        }>Login</button>
    </div>
  )
}

export default Login