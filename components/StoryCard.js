import React from 'react'
import Image from 'next/image'

function StoryCard({ name, src, profile }) {
  return (
    <div className="relative w-[135px] h-[260px] shrink-0 cursor-pointer transition duration-200 transform ease-in hover:scale-97 hover:animate-pulse">
      {/* Background Image */}
      <div className="absolute w-full h-full">
        <Image
          className="rounded-2xl object-cover"
          src={src}
          fill
          alt="story content"
        />
      </div>

      {/* Profile Image & Name */}
      <div className="relative z-10">
        <Image
          className="absolute top-3 left-3 rounded-full border-2 border-blue-500"
          src={profile}
          width={40}
          height={40}
          alt="story-profile-picture"
        />
        <p className="absolute top-58 left-3 text-white text-sm font-bold truncate w-[80%]">
          {name}
        </p>
      </div>
    </div>
  );
}

export default StoryCard;
