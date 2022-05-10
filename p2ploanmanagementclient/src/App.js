import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';

function responseGoogle(response) {
  console.log(response);
}

function App() {
  return (
    <div className="App">

        <GoogleLogin
            clientId="730881350107-k8rtdsdjmj4ms5q74j50aprlaqmfps8i.apps.googleusercontent.com"
            buttonText="Login With Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    </div>
  );
}

export default App;
