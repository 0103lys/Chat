import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import Routes from './Routes';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Main/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
