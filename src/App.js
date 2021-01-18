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
        <h1 className="App-title">{this.props.title}</h1>
        <div>{this.props.myObj.a}</div>
        <div>{this.props.myArr[0]}</div>
        <div>{this.props.myFunc(10, 12)}</div>
        
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
      <Header 
        title="Hello World"
        myArr={[0,2,3]}
        myFunc={(a, b) => a + b}
        myObj={{
          a: 5,
          b: 1
        }}/>
        
      {/* <Header title="Hello World 2" num={5}/> */}
    </div>
  );
}

export default App;
