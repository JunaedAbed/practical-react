import React from 'react';

export default class MyForm extends React.Component{
    
    state = {
        name: "",
        fvrtPet: "",
        rememMe: false,
        title: 'Ms',
    }
    
    handleChange = (event) => {
       
        this.setState({name: event.target.value});
    };
    
    handleChangeForPet = (event) => {
       
        this.setState({fvrtPet: event.target.value});
    };
    
    handleChangeCheckBox = (event) => {
       
        this.setState({rememMe: event.target.checked});
    };
    
    handleSelect = (event) => {
        
        this.setState({title: event.target.value});
    };
    
    handleSubmit = (event) => {
        
        console.log(this.state);
    };
    
    render() {
        return(
            <div>
                <input value={this.state.name} onChange={this.handleChange}/>
                
                <textarea value={this.state.fvrtPet} onChange={this.handleChangeForPet}/>
                
                <input type="checkbox" checked={this.state.rememMe} onChange={this.handleChangeCheckBox} />
                
                <div>
                    <select value={this.state.title} onChange={this.handleSelect}>
                        <option value="Mr">Mr.</option>
                        <option value="Ms">Ms.</option>
                        <option value="Mrs">Mrs.</option>
                    </select>
                </div>
                <button onClick={this.handleSubmit}>Submit</button>
                
            </div>
        ); 
            
    }
}