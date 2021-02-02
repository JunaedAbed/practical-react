import React from 'react';

export default class FetchRandomUser extends React.Component{
    
    state ={
        loading: true,
        people: null,
    }
    
    async componentDidMount(){
        const url = "https://api.randomuser.me/?results=5";
        const res = await fetch(url);
        const data = await res.json();
        this.setState({people: data.results, loading: false });
    }
    
    render(){
        if(this.state.loading){
            return <div>loading...</div>
        }
        
        if(!this.state.people.length){
            return <div>did not get a person</div>
        }
        
        const peopleJsx= this.state.people.map(person => (
                    <div key={person.login.uuid + person.name.last}>
                        <div>{person.name.title}</div>
                        <div>{person.name.first}</div>
                        <div>{person.name.last}</div>
                        <div>{person.location.city}</div>
                        <img src={person.picture.large} />
                    </div>
                ));
        
        // const peopleJsx =  [];
        
        // this.state.people.forEach((person) => {
        //     peopleJsx.push(
        //         <div key={person.login.uuid + person.name.last}>
        //             <div>{person.name.title}</div>
        //             <div>{person.name.first}</div>
        //             <div>{person.name.last}</div>
        //             <div>{person.location.city}</div>
        //             <img src={person.picture.large} />
        //         </div>
        //     )
        //     });
        
        return (
            <div>
                {peopleJsx}
            </div>
        );
        
    }
}