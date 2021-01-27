import './App.css';
import React, { Component } from "react";

import Header from './components/Header';
//import ImageSlider from './components/ImageSlider';
import Counter from './components/Counter';

class App extends Component {
  
  state = {
    visible: true,
    whichComponentToShow: 'Counter'
  };
  
  render() {
    
    // let slider = this.state.whichComponentToShow ? <ImageSlider /> : (<div><Counter /></div>);
    
    // if(this.state.whichComponentToShow == 'ImageSlider'){
    //   return (
    //     <div className="App">
    //       <ImageSlider />
    //       <button onClick={() => {
    //         this.setState({ whichComponentToShow: 'Counter' });
    //       }}>Show Counter</button>
    //     </div>
    //   )
    // }
    if(this.state.whichComponentToShow === 'Counter') {
      return (
        <div className="App">
          
          <div className={this.state.visible ? 'visible' : 'hidden'}>
            <Counter />
          </div>
          <button onClick={() => {
            this.setState({ visible: !this.state.visible });
          }}>Toggle Counter</button>
        </div>
      );
    }
    // else if(this.state.whichComponentToShow == 'Header') {
    //   return (
    //     <div className="App"><Header /></div>
    //   )
    // }
    
    return null;
  }
  
}

export default App;
