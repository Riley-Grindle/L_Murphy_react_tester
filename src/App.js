import logo from './iphone-x-pictures-45216.png';
// import { ReactComponent as Logo } from './PEPE.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <img src={logo} className="App-logo" />
        </div>
        {/* <div>
        Logo is an actual React component
        <Logo fill='red' stroke='green' className="App-logo" alt="logo" />
        </div> */}
        <p>
          Free IPHONE!!!
        </p>
        <a
        className="App-link"
        href= "https://www.youtube.com/watch?v=cGw-8FrRT1E"
        target= "_blank"
        // rel="noopener noreferrer"
        >
        Click Here
        </a>
      </header>
    </div>
  );
}

export default App;
