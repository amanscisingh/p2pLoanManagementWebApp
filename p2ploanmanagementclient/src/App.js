import './App.css';
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import {useState} from 'react';

function App() {
  const loginInfo = useSelector(state => state.loginInfo);
  const userInfo = useSelector(state => state.userInfo);
  const isloggedIn = loginInfo.isloggedIn;
  const isRegistered = userInfo.email !== '';

  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="App">
      { isloggedIn ? <Dashboard />  : isLoginView ? <Login /> : <Register /> }

      { isloggedIn ? "" : <button onClick={ () => setIsLoginView(!isLoginView) }>Toggle Login/Register</button> }
      
    </div>
  );
}

export default App;
