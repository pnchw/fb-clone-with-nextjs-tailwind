import React from "react";
import Image from "next/image";

function Group({ src, name}) {
  return (
    <div className="flex items-center space-x-2 p-4 rounded-xl cursor-pointer hover:bg-gray-200">
        <Image 
            className="rounded-full"
            src={src}
            width={30}
            height={30}
            alt=""
        />
        <p className="font-medium">{name}</p>
    </div>
  )
}

export default Group;
