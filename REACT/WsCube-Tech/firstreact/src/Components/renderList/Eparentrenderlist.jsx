
import React, {Component} from 'react';
import Erenderlist from './Erenderlist';

class Eparentrenderlist extends Component{
    constructor(props){
        super(props);
        
        this.state ={
            person:[
                {   
                    name:"karishma",
                    age:23,
                },
                {
                   
                    name:"Raj",
                    age:25,
                },
                {
                    
                    name:"Mahi",
                    age:9,
                },
            ],
            isShow: true,
        };
        this.toggleHandler = this.toggleHandler.bind(this);

    }

    toggleHandler() {
        this.setState({isShow: !this.state.isShow})
    }
    render(){
        
        let persons;
        if(this.state.isShow){
            persons = this.state.person.map((p, index) => {
                return <Erenderlist key={index} name={p.name} age={p.age} />
            })
        }else{
            persons = "";
        }
       

        return(
            <div>
                <button onClick={this.toggleHandler}>Toggle</button>
                {persons}
            </div>
        )
    }
}
// class Eparentrenderlist extends Component{
//     constructor(props){
//         super(props);
        
//         this.state ={
//             person:[
//                 {   id:1,
//                     name:"karishma",
//                     age:23,
//                 },
//                 {
//                     id:2,
//                     name:"Raj",
//                     age:25,
//                 },
//                 {
//                     id:3,
//                     name:"Mahi",
//                     age:9,
//                 },
//             ]
//         }

//     }
//     render(){
        
//         let persons;
//         persons = this.state.person.map((p) => {
//             return <Erenderlist key={p.id} name={p.name} age={p.age} />
//         })

//         return(
//             <div>
//                 {persons}
//             </div>
//         )
//     }
// }
export default Eparentrenderlist;