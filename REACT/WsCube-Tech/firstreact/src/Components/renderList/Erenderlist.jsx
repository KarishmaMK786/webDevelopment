import React, {Component} from 'react';

class Erenderlist extends Component {
    constructor(props){
        super(props);
        this.props = props;

    }

    render(){
        return(
            <div>
                <h1>
                    <label>Name:</label>
                    <i>{this.props.name} {this.props.age}</i>
                </h1>
            </div>
        )
    }
}
export default Erenderlist;