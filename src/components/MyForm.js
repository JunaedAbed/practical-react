import React from 'react';

export default class MyForm extends React.Component{
    
    state = {
        name: "",
        fvrtPet: "",
        rememMe: false,
        title: 'Ms',
    }
    
    handleChange = (event) => {
        
        const isCheckbox = event.target.type === 'checkbox';
        this.setState({[event.target.name]: isCheckbox ? event.target.checked : event.target.value});
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };
    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="name"
                    value={this.state.name} 
                    onChange={this.handleChange}
                />
                
                <textarea 
                    name="fvrtPet"
                    value={this.state.fvrtPet} 
                    onChange={this.handleChange}
                />
                
                <input 
                    name="rememMe"
                    type="checkbox" 
                    checked={this.state.rememMe} 
                    onChange={this.handleChange} 
                />
                
                <div>
                    <select 
                        name="title"
                        value={this.state.title} 
                        onChange={this.handleChange}
                    >
                        <option value="Mr">Mr.</option>
                        <option value="Ms">Ms.</option>
                        <option value="Mrs">Mrs.</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
                
            </form>
        ); 
            
    }
}