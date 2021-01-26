import React from "react";
import logo from '../logo.svg';
import {Body, Body2} from './Body';
import Counter from './Counter';

export default class Header extends React.Component {
  render() {
    
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.title}</h1>
        <div>{this.props.myObj.a}</div>
        <div>{this.props.myArr[0]}</div>
        <div>{this.props.myFunc(10, 12)}</div>
        
        <Body text="i am cool" text2="i am cool2" myFunc={(a, b) => a + b} />
        <Body text="i cool" text2="i cool2" myFunc={(a, b) => a + b} />
        <Counter initCount={0} />
        <Counter initCount={10} />
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
