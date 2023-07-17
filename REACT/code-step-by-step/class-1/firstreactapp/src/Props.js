import React from 'react';
// function Props(prop){

//     return(
//         <div>
//           <h1>{prop.text.name}</h1>          //function Component
//             <h1>{prop.data}</h1>
//         </div>
//     )
// }
// export default Props;

export default class Props extends React.Component{

    render(){

        return (
            <div>
                <h1>{this.props.data}</h1>
                <h1>{this.props.text.name}</h1>
            </div>
        )
    }
}