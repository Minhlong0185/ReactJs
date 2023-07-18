import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';

/**
 * có 2 loại components: class components và function conponent(function, arrow)
 */


function App() {
  // const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/profile.php?id=100039252153480"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />

      </header>
    </div>
  );
}

export default App;
