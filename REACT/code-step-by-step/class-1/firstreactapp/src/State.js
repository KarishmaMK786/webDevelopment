import React from 'react';

class State extends React.Component{

    constructor(){
        super();
        this.state = {
            name: 'peter',
            email:'matazkk786@gmail.com',
            count:0
        }
    }

   updateState(){
    this.setState({
        name:'Bruce',
        count:this.state.count+1
    })
   }


    render(){
        console.log('render');
        return (
            <div>
                <h1>Count {this.state.count}</h1>
                <h1>Email: {this.state.email}</h1>
                <button onClick={()=>{this.updateState()}}>Update name</button>
            </div>
        )
    }
}
export default State;