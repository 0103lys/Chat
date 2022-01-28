import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import Routes from './Routes';
import Nav from './components/Nav';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Login/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
