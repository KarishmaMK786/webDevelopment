import React, {Component} from 'react';

class Estate extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            name:'Kempi',
            age:'29',
        };
    }
    nameChangeHandler(){
        console.log(this.state);
        this.setState({name:"Raj", age:"23"}, ()=>{
            console.log(this.state);
        });
    }

  


    render(){
        return(
            <div>
                <h1>
                    <i>
                        Dear {this.state.name},Your age is {this.state.age}
                    </i>
                    <br />

                    <button onClick={() => this.nameChangeHandler()}>Click Me</button>
                </h1>
            </div>
        )
    }

}

export default Estate;