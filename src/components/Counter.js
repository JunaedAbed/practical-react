import React from "react";

export default class Counter extends React.Component {
    
    // constructor(props) {
    //     super(props);
        
    //     this.state = {
    //         count: props.initCount
    //     };
    // }
    
    
    
    render() {
        return (
        <div>
            <div>count: {this.props.count}</div>
            <button onClick={this.props.increment}>increment</button>
            <button onClick={this.props.decrement}>decrement</button>  
        </div>
        );
    }
}
