import './App.css';
import { LoginBtn } from './LoginBtn';
import logo from './assets/bank-logo.png';

function App() {
  return (
    <div className="App">
      {
        <div className="App-header">
            <img src={logo} alt="Logo" style={{width:'250px', height:'270px'}}/>
            <h1>Welcome to the Bank of React</h1>
            <LoginBtn />
        </div>
      }
    </div>
  );
}

export default App;
