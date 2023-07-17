import React from "react";
import "./App.css";
// import {Video,Thumb} from "./Components/Video";
import Video from "./Components/Video";
import videoDB from "./Data/Data";
import PlayButton from "./Components/PlayButton";
import Counter from "./Components/Counter";
import { useState } from "react";


function App() {
  let className = "App-header";
  const [videos, setVideos] = useState(videoDB);
 
  return (
    <div className="App" onClick={() => console.log("Plaay")}>
      <div>
        <button id="addvideo" onClick={() =>{
        
            setVideos([...videos,{
              id:videos.length+1,
              title:"ReactJS",
              views:"10k",
              time:"1 year ago",
              channel:"Coder Dost",
              verified:true
            }]);
        }}>Add Video</button>
      </div>
    
      {
        videos.map(video =>
        <Video
          key = {video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id = {video.id}
        >
          <PlayButton  onPlay={() => console.log("Playyy")} onPause={()=> console.log("Pause")} >{video.title}</PlayButton>

        </Video>)
      
      }

      <div>
     {/* <PlayButton  message="Video Paused" onSmash={() => alert("Paused")}>Pause</PlayButton> */}
     </div>
       

       <Counter></Counter>
    </div>
    
  );
}

export default App;
