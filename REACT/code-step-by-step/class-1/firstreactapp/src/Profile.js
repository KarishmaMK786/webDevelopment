// import React from 'react';

// class Profile extends React.Component{
    
//     constructor(){                          // class component consists either constructure or return value using render method
//     super();   
//     }

//     componentDidMount(){
//         console.warn("called life");
//     }

//     render(){
//         return(
//             <div>
//                 <h1>Class Component</h1>
//             </div>
//         )
//     }
// }
// export default Profile;

import React from 'react';


    export default function Profile(prop){

        const red = () =>{
            alert("red function called");
        }
        return <div>
            <h1 onClick={red}>{prop.text}</h1>
        </div>
    }
