import React from 'react';

const defaultState = {
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: "",
}

export default class ValidationForm extends React.Component{
  
    state = defaultState;
   
    
    handleChange = (event) => {
        
        const isCheckbox = event.target.type === 'checkbox';
        this.setState({[event.target.name]: isCheckbox ? event.target.checked : event.target.value});
    };
    
    validate = () => {
        let nameError= "";
        let emailError= "";
        let passwordError= "";
        
        if(!this.state.name) {
            nameError = 'Name cannot be blank';
        }
        
        if(!this.state.email.includes('@')) {
            emailError = 'invalid email';
        }
        
        if(!this.state.password) {
            passwordError = 'passsword is empty';
        }
        
        if(emailError || nameError || passwordError) {
            this.setState({emailError, nameError, passwordError});
            return false;
        }
        
        return true;
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const isvalid = this.validate();
        if (isvalid){
            console.log(this.state);
            
            //clear the form
            this.setState(defaultState);
        } 
        
    };
    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input 
                        name="name"
                        placeholder="name"
                        value={this.state.name} 
                        onChange={this.handleChange}
                    />
                    <div style={{ fontSize: 12, color: "red"}}>{this.state.nameError}</div>
                </div>
                
                <div>
                    <input 
                        name="email"
                        placeholder="email"
                        value={this.state.email} 
                        onChange={this.handleChange} 
                    />
                    <div style={{ fontSize: 12, color: "red"}}>{this.state.emailError}</div>
                </div>
                
                <div>
                    <input 
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password} 
                        onChange={this.handleChange} 
                    />
                    <div style={{ fontSize: 12, color: "red"}}>{this.state.passwordError}</div>
                </div>
                
                <button type="submit">Submit</button>
                
            </form>
        ); 
            
    }
}
