import React from "react";
import './Video.css';

function Video({id,title,channel,views="kempi",time,verified,children}) {
  
  return ( 
    // Using this we can follows the rules of components and also it will not visible in elements
    <> 
        <div className="container">
            <div className="pic">
            <img src={`https://picsum.photos/id/${id}/160/90`} alt="image" />
            </div>
            <div className="title">{title}</div>
            {/* {verified ? <div className="channel">{channel}✅</div>:<div className="channel">{channel}</div>} */}
            {/* <div className="channel">{channel}{verified?'✅':null}</div> */}

            <div className="channel">{channel}{verified && '✅'}</div>
          
            <div className="views">
                {views}views<span>.</span>{time}
            </div>
            <div>{children}</div>
        </div>
    </>
  );
}
// function Thumb(){
//     return(
//         <div>
//             Thumb
//         </div>
//     )
// }
// export {Video, Thumb};

export default Video;
