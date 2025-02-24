"use client";

import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

function MyStoryCard() {
  const { data: session} = useSession();

  return (
    <div className="relative w-[135px] h-[260px] shrink-0 cursor-pointer transition duration-200 transform ease-in hover:scale-97 hover:animate-pulse">
      
      {/* Background Image */}
      {session?.user && (
        <Image
          className="rounded-2xl object-cover object-center"
          src={session.user.image}
          fill
          alt="my-story content"
        />)}

      {/* Profile Image & Name */}
      <div className="absolute bottom-0 z-10 w-full">
        <div className="relative -bottom-5 flex items-center justify-center">
          <Image
            className=""
            src={"/assets/images/icons/add-icon.png"}
            width={40}
            height={40}
            alt="my-story-profile-picture"
          />
        </div>

        <div className="flex items-center justify-center w-full bg-white py-5 rounded-b-2xl m-0">
          <p className="text-black text-sm text-center font-bold">
            Create story
          </p>
        </div>
      </div>

    </div>
  );
}

export default MyStoryCard;