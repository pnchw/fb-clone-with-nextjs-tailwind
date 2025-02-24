import React from 'react'
import Stories from './Stories'
import InputBox from './InputBox';
import Posts from "./Posts";

function Feed() {
  return (
    <div className="flex shrink-0 justify-center w-1/2 h-screen ml-[25%]
                max-[1100px]:ml-0 max-[1100px]:w-[75%]
                max-[900px]:w-full max-[900px]:mx-auto 
                max-[899px]:justify-center 
                max-[700px]:w-full">
      <div className="flex flex-col w-[90%] 
          max-[1100px]:w-[90%]
          max-[900px]:w-[95%]">
          <div><InputBox /></div>
          <div><Stories /></div>
          <div><Posts /></div>  
      </div>
    </div>
  )
  }

export default Feed;

