// import React,{useState,useRef}from 'react'
// interface AudioPlayerProps {
//     preview_url?:string;
// }
// const AudioPlayer = ({preview_url}:AudioPlayerProps) => {
//     const [isPlaying,setIsPlaying] = React.useState(false)
//     const audioRef = React.useRef<HTMLAudioElement>(null);
//     const togglePlay = () => {
//         if(isPlaying){
//             audioRef.current?.pause();
//         }else{
//             audioRef.current?.play();
//         } 
//         setIsPlaying(!isPlaying);
//     }
//   return (
//     <div>
//         <audio ref={audioRef} src={preview_url} />
//         <button onClick={togglePlay} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         {isPlaying ? 'Pause' : 'Play'}
//          </button>

//     </div>
//   )

// }

// export default AudioPlayer;

import React, { useState, useRef } from 'react';

interface AudioPlayerProps {
  preview_url: string;
}

const AudioPlayer = ({ preview_url }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center">
      <audio ref={audioRef} src={preview_url} />
      <button
        onClick={togglePlay}
        className="bg-green-500 text-white px-4 py-2 rounded-full"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default AudioPlayer;
