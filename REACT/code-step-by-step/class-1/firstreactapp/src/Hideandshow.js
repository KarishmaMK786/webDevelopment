import React from 'react';
class Hideandshow extends React.Component{
    constructor(){
        super();
        this.state = {
            show:true,
        }
    }

    render(){
        return(
            <div>
             {
                this.state.show?
                <h1>hide and show</h1>
                :null
             }
             <button onClick={()=>this.setState({show:false})}></button>
            </div>
        )
    }
}