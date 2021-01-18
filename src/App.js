import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// const Body = () => (
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
// );
// const Body = () => {
//   return(
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//   );
// };

function Body () {
  return(
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
  );
}

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Junaed Abed</h1>
        <Body />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
