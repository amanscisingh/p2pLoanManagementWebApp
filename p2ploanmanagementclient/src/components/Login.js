import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const userInfo = useSelector(state => state.userInfo);
    const loginInfo = useSelector(state => state.loginInfo);
    const dispatch = useDispatch();

  return (
    <div className='container'>
        <label htmlFor="email">Please Enter email</label>
        <input type="email" name="email" value={userInfo.email} onChange={
            (e) => {
                dispatch({
                    type: 'UPDATE_EMAIL',
                    payload: {
                        email: e.target.value
                    }
                })  
            }
        } />
        <br />
        <label htmlFor="password">Enter password</label>
        <input type="password" name="password" value={userInfo.password} onChange={
            (e) => {
                dispatch({
                    type: 'UPDATE_PASSWORD',
                    payload: {
                        password: e.target.value
                    }
                })  
            }
        } />
    </div>
  )
}

export default Login