import React, {Component} from 'react';

export default class Epropsconst extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return(
            <div>
                <h1>Hii {this.props.name} I am glad to see you</h1>
            </div>
        )
    }
}