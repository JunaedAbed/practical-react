import React from "react";

export default class ImageSlider extends React.Component {
    state = {
        images : [
            "https://i.pinimg.com/564x/08/1e/15/081e1546ae175fc5593a5932a1d1bc59.jpg",
            "https://i.pinimg.com/236x/c4/79/26/c47926695a56c0a90aef84b6fa9692d5.jpg",
            "https://i.pinimg.com/236x/6f/e5/7c/6fe57cae6d44ea130990921b61f66894.jpg",
            "https://i.pinimg.com/236x/f4/a4/af/f4a4af876eb62ab4b1e6d90c5550ec3e.jpg"
        ],
        idx: 0
    }
    
    handleNext =() => {
        this.setState({
           idx: this.state.idx + 1 
        });
    };
    
    handlePrev =() => {
        this.setState({
           idx: this.state.idx - 1 
        });
    };
    
    render() {
        return (
           <div>
                <img
                style={{
                    width: 414,
                    height: 623
                }}
                src={this.state.images[this.state.idx]} />
                <br></br>
                <button onClick={this.handlePrev}>Previous</button>
                <button onClick={this.handleNext}>Next</button>
            </div> 
        )
        
    }
}