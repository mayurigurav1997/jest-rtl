import logo from './logo.svg';
import './App.css';
import { Greet } from './component/greet/Greet';
import { Application } from './component/application/Application'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header> */}
      <Greet name="Mayuri" />
      <Application />
    </div>
  );
}

export default App;
