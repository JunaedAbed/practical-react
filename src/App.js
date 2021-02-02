import './App.css';
import React, { Component } from "react";
// import ValidationForm from './components/ValidationForm';
import FetchRandomUser from './components/FetchRandomUser';


class App extends Component {
  
  state = {
    visible: true,
  };
  
  render() {
    
    return (
      <div className="App">
        <FetchRandomUser />
      </div>
    );
  }
  
}

export default App;
